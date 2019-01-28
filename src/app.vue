<template>
<div id="app">
  <svg width="1700px" height="650px">
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
  </svg>

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
import * as d3 from 'd3'
import Vue from 'vue'
import { mapState, StoreOptions } from 'vuex'
import { positionInTier, getMapAtId, getMapByName, countMapsInTier, getMapsInTier } from './components/map-helpers'
import store, { RootState } from './store/store'
import './store/local-storage'

const MAP_DIMENSIONS = 20 // px
const SVG_PADDING = 20 // px
const VIEW_HEIGHT = 650 // px


function getClassNameForMap(map: App.Map) {
  let classes = []

  if (map.unique) { classes.push('is-unique') }
  if (map.owned && !map.completed) { classes.push('is-owned') }
  if (map.completed) { classes.push('is-completed') }

  return classes.join(' ')
}

function getCoordsForMap(map: App.Map, opt: { adjustment?: number } = {}) {
  let x = ((map.tier - 1) * 175) + SVG_PADDING

  const position = positionInTier(map)
  const mapsInTier = countMapsInTier(map.tier)

  const scale = d3.scalePoint()
    .domain(getMapsInTier(map.tier).map(m => m.name))
    .range([SVG_PADDING, VIEW_HEIGHT - MAP_DIMENSIONS - SVG_PADDING])

  let y = Math.floor(scale(map.name) || 0)

  if (opt.adjustment) {
    x += opt.adjustment
    y += opt.adjustment
  }

  return { x, y }
}

function getTransformForMap(map: App.Map) {
  const c = getCoordsForMap(map)
  return `translate(${c.x}px, ${c.y}px)`
}

function getLinkBetweenMaps(fromName: string, toName: string) {
  const start = getCoordsForMap(getMapByName(fromName), { adjustment: MAP_DIMENSIONS / 2 })
  const end = getCoordsForMap(getMapByName(toName), { adjustment: MAP_DIMENSIONS / 2 })

  const link: d3.DefaultLinkObject = {
    source: [start.x, start.y],
    target: [end.x, end.y]
  }

  const result = d3.linkHorizontal()(link)

  if (!result) {
    throw new Error(`Couldn't compute a link between ${fromName} and ${toName}.`)
  }

  return result
}

export default {
  name: 'app',
  store,
  computed: {
    // TODO: Figure out why annotating `this` is necessary.
    completedMapsCount(this: Vue): number {
      return this.$store.getters.completedMapsCount
    },
    links(this: Vue): Array<{ d: string, id: number }> {
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
    nodes(this: Vue): App.Node[] {
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
    totalMapsCount(this: Vue): number {
      return this.$store.getters.totalMapsCount
    }
  },
  methods: {
    clearLocalStorage(): void {
      localStorage.removeItem('patrocles:store')
      window.location.reload()
    },
    cycle(map: App.Map): void {
      if (map.owned && !map.completed) {
        return store.commit('completeMap', map.id)
      }
      if (map.completed) {
        return store.commit('clearMap', map.id)
      }
      return store.commit('acquireMap', map.id)
    }
  },
  beforeCreate(this: Vue): void {
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
</style>
