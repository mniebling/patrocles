<template>
<div id="app">
  <svg width="100%" height="500px">
    <transition-group tag="g" name="links">
      <path
        v-for="(link, index) in links"
        v-bind:class="link.className"
        v-bind:key="index"
        v-bind:d="link.d">
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
        <text v-bind:style="map.style" dx="25" dy="15">{{ map.name }}</text>
      </g>
    </transition-group>
  </svg>

  <div class="legend">
    <p class="count">{{ completedMapsCount }} of 30 complete.</p>
    <p>Click a node to toggle the map between default, "owned", and "completed" states.</p>
    <p>All lines indicate map connections, but solid lines show the upgrade path.
      In other words, dashed lines indicate the maps which can't be bought with
      a 3:1 trade-in.</p>
    <p>Data is stored in the browser's local storage. For now, the only way to
      clear it is by manually deleting the "store" key.</p>
    <button v-on:click="clearLocalStorage()">Clear local storage &amp; reload</button>
  </div>
</div>
</template>


<script>
import * as d3 from 'd3'
import { mapState } from 'vuex'
import store from './store/store'
import './store/local-storage'

const MAP_DIMENSIONS = 20 // px
const SVG_PADDING = 10 // px

function getMapAtId(id) {
  return store.state.maps.find(map => map.id === id)
}

function getMapByName(name) {
  return store.state.maps.find(map => map.name === name)
}

function getClassNameForEdgeType(edgeType) {
  if (edgeType === 'drops') { return 'is-drop-only' }
}

function getClassNameForMap(map) {
  if (map.owned && !map.completed) { return 'is-owned' }
  if (map.completed) { return 'is-completed' }
}

function getCoordsForMap(map, opt = {}) {
  let x = ((map.tier - 1) * 150) + SVG_PADDING
  let y = ((map.numberInTier - 1) * 50) + SVG_PADDING

  if (opt.adjustment) {
    x += opt.adjustment
    y += opt.adjustment
  }

  return { x, y }
}

function getTransformForMap(map) {
  const c = getCoordsForMap(map)
  return `translate(${c.x}px, ${c.y}px)`
}

function getLinkBetweenMaps(fromName, toName) {
  const start = getCoordsForMap(getMapByName(fromName), { adjustment: MAP_DIMENSIONS / 2 })
  const end = getCoordsForMap(getMapByName(toName), { adjustment: MAP_DIMENSIONS / 2 })

  const link = {
    source: [start.x, start.y],
    target: [end.x, end.y]
  }

  return d3.linkHorizontal()(link)
}

export default {
  name: 'app',
  store,
  computed: {
    completedMapsCount() {
      return this.$store.getters.completedMapsCount
    },
    links() {
      const links = []

      this.$store.state.maps.forEach(map => {
        if (!map.edges) { return }

        map.edges.forEach(edge => {
          links.push({
            d: getLinkBetweenMaps(map.name, edge.to),
            className: getClassNameForEdgeType(edge.type)
          })
        })
      })

      return links
    },
    nodes() {
      return this.$store.state.maps.map(map => {
        return {
          ...map,
          className: getClassNameForMap(map),
          style: {
            transform: getTransformForMap(map)
          }
        }
      })
    }
  },
  methods: {
    clearLocalStorage() {
      localStorage.removeItem('store')
      window.location.reload()
    },
    cycle(map) {
      if (map.owned && !map.completed) {
        return store.commit('completeMap', map.id)
      }
      if (map.completed) {
        return store.commit('clearMap', map.id)
      }
      return store.commit('acquireMap', map.id)
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  }
}
</script>


<style>
/* TODO: get css-next involved for variables */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
svg {
  background-color: #f2f2f2;
}
text {
  font-size: 14px;
}
path {
  fill: transparent;
  stroke: #aaa;
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
}
.count {
  color: #333;
}
</style>
