import * as d3 from 'd3'

import {
  getMapByName,
  getMapsInTier
} from './map-data-helpers'

export const MAP_DIMENSIONS = 20 // px
export const SVG_PADDING = 20 // px
export const VIEW_HEIGHT = 650 // px


/**
 * Returns the CSS classes which should be assigned to a map's SVG object.
 */
export function getClassNameForMap (map: App.Map) {
  const classes = []

  if (map.unique) { classes.push('is-unique') }
  if (map.owned && !map.completed) { classes.push('is-owned') }
  if (map.completed) { classes.push('is-completed') }

  return classes.join(' ')
}

/**
 * Gets the coordinates where a map's SVG object should be drawn on the canvas.
 * Accepts an adjustment which will be applied to both the x and y coordinates.
 */
export function getCoordsForMap (map: App.Map, opt: { adjustment?: number } = {}) {
  let x = ((map.tier - 1) * 175) + SVG_PADDING

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

/**
 * Returns a d3 horizontal link string describing the curve to draw between
 * two maps.
 */
export function getLinkBetweenMaps (fromName: string, toName: string) {
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

/**
 * Returns a CSS transform value string which should be applied to the SVG
 * object for a given map.
 */
export function getTransformForMap (map: App.Map) {
  const c = getCoordsForMap(map)
  return `translate(${c.x}px, ${c.y}px)`
}
