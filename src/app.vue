<template>
<div id="app">
  <div
    v-bind:class="{
      'show-left-fade': showLeftFade,
      'show-right-fade': showRightFade
    }"
    v-on:scroll.passive="onScroll()"
    id="chart-container">

    <svg width="2750px" height="670px">
      <transition-group tag="g" name="links">
        <path
          v-for="(link, index) in links"
          v-bind:d="link.d"
          v-bind:key="link.id">
        </path>
      </transition-group>

      <transition-group tag="g" name="maps">
        <g class="node" v-for="map in nodes" v-bind:key="map.id">
          <rect
            v-bind:style="map.style"
            v-bind:class="map.className"
            v-on:click="cycle(map)"
            height="20"
            width="20"></rect>
          <text
            v-bind:style="map.style"
            v-bind:class="map.className"
            dx="25"
            dy="15">{{ map.name }}</text>
        </g>
      </transition-group>

      <transition-group tag="g" name="tiers">
        <text
          class="tier-label"
          v-for="tier in tiers"
          v-bind:style="tier.style"
          v-bind:key="tier.number"
          v-on:click="cycleTier(tier)">{{ tier.label }}</text>
      </transition-group>
    </svg>
  </div>

  <div class="legend">
    <p class="count">{{ completedMapsCount }} of {{ totalMapsCount }} complete.</p>
    <button v-on:click="clearLocalStorage()">Clear local storage &amp; reload</button>
    <p>Click a node to toggle the map between default, "owned", and "completed" states.</p>
    <p>Data is stored in the browser's local storage. For now, the only way to
      clear it is by manually deleting the "store" key.</p>
  </div>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import './store/local-storage'
import store, { RootState } from './store/store'
import { mapState, StoreOptions } from 'vuex'

import {
  countMapsInTier,
  getMapAtId,
  getMapByName,
  getMapsInTier,
  positionInTier
} from './components/map-data-helpers'

import {
  MAP_DIMENSIONS,
  SVG_PADDING,
  VIEW_HEIGHT,
  getClassNameForMap,
  getCoordsForMap,
  getLinkBetweenMaps,
  getTransformForMap,
  getTransformForTier
} from './components/map-drawing'


interface AppComponentViewModel {
  showLeftFade: boolean,
  showRightFade: boolean
}

export default {
  name: 'app',
  store,
  data: (): AppComponentViewModel => ({
    showLeftFade: false,
    showRightFade: true
  }),
  computed: {
    // TODO: Figure out why annotating `this` is necessary.
    completedMapsCount (this: Vue): number {

      return this.$store.getters.completedMapsCount
    },
    links (this: Vue): Array<{ d: string, id: number }> {

      const links: Array<{ d: string, id: number }> = []

      let id = 0

      this.$store.state.maps.forEach((map: App.Map) => {
        if (!map.edges) { return }

        map.edges.forEach(edge => {
          links.push({
            d: getLinkBetweenMaps(map.name, edge.to),
            id: ++id
          })
        })
      })

      return links
    },
    nodes (this: Vue): App.Node[] {

      return this.$store.state.maps.map((map: App.Map) => {
        return {
          ...map,
          className: getClassNameForMap(map),
          style: {
            transform: getTransformForMap(map)
          }
        }
      })
    },
    tiers (this: Vue) {

      return this.$store.state.tiers.map((tier: App.Tier) => {
        return {
          ...tier,
          style: {
            transform: getTransformForTier(tier)
          }
        }
      })
    },
    totalMapsCount (this: Vue): number {

      return this.$store.getters.totalMapsCount
    }
  },
  methods: {
    clearLocalStorage (): void {

      localStorage.removeItem('patrocles:store')
      window.location.reload()
    },
    cycle (map: App.Map): void {

      if (map.owned && !map.completed) {
        return store.commit('completeMap', map)
      }
      if (map.completed) {
        return store.commit('clearMap', map)
      }
      return store.commit('acquireMap', map)
    },
    cycleTier (tier: App.Tier): void {

      if (tier.owned && !tier.completed) {
        return store.commit('completeTier', tier)
      }
      if (tier.completed) {
        return store.commit('clearTier', tier)
      }
      return store.commit('acquireTier', tier)
    },
    // TODO: This `this` typing seems weird.
    onScroll (this: AppComponentViewModel): void {

      const container = document.getElementById('chart-container')
      if (!container) { throw new Error(`Couldn't find chart container!`) }

      const fullyScrolledLeft = container.scrollWidth - document.body.clientWidth

      this.showRightFade = (container.scrollLeft !== fullyScrolledLeft)
    }
  },
  beforeCreate (this: Vue): void {

    this.$store.commit('initializeStore')
  }
}
</script>


<style>
/* TODO: get css-next involved for variables */
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#chart-container {
  overflow-x: auto;
  position: relative;
  width: 100%;
}
#chart-container.show-right-fade::after {
  background: linear-gradient(to right, rgba(0,0,0,0), #f2f2f2);
  content: '';
  height: 100%;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 15%;
}
svg {
  background-color: #f2f2f2;
}
text {
  fill: #333;
  font-size: 14px;
  paint-order: stroke;
  stroke: #f2f2f2;
  stroke-width: 6px;
  stroke-opacity: 0.9;
  user-select: none; /* prevent accidental highlighting */
}
text.is-unique {
  fill: brown;
}
path {
  fill: transparent;
  stroke: #bbb;
}
path.is-drop-only {
  stroke-dasharray: 4 4;
}
rect {
  cursor: pointer;
  fill: #f2f2f2;
  shape-rendering: crispedges;
  stroke: #999;
  stroke-dasharray: 4 4;
  transition: all 0.25s;
}
rect.is-owned {
  stroke: #333;
  stroke-dasharray: none;
}
rect.is-completed {
  fill: lightgreen;
  stroke: green;
  stroke-dasharray: none;
}
.legend {
  color: #999;
  max-width: 500px;
  padding: 20px;
}
.count {
  color: #333;
}
text.tier-label {
  cursor: pointer;
  fill: #999;
}
</style>
