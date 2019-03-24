import * as d3 from 'd3'
import { tiers } from '@/store/tiers'
import {
  getMapByName,
  getMapsInTier
} from './map-data-helpers'


export const MAP_DIMENSIONS = 20 // px
export const SVG_PADDING = 20 // px
export const VIEW_HEIGHT = 620 // px

// Calculate the label widths once up front.
const tierXCoords: number[] = [SVG_PADDING]

tiers.reduce((accumXCoord, tier) => {

  const width = getMaxLabelWidthForTier(tier.number)

  tierXCoords.push(width + accumXCoord)
  return width + accumXCoord

}, SVG_PADDING)


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

  let x = getXCoordForTierNumber(map.tier)

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
 * Get the width of the longest text label for all the maps in a tier.
 */
export function getMaxLabelWidthForTier (tier: number) {

  const maps = getMapsInTier(tier)
  const longestLength = d3.max(maps, m => m.name.length) || 0

  // Arbitrary factor chosen to look good. Could use BBox but then we'd have
  // to be rendering them first and it's harder to have a pure function here.
  return (longestLength * 10) + 20
}

/**
 * Returns a CSS transform value string which should be applied to the SVG
 * object for a given map.
 */
export function getTransformForMap (map: App.Map) {

  const c = getCoordsForMap(map)
  return `translate(${c.x}px, ${c.y}px)`
}

/**
 * Returns a CSS transform value string which should be applied to the SVG
 * object for a given map.
 */
export function getTransformForTier (tier: App.Tier) {

  return `translate(${getXCoordForTierNumber(tier.number)}px, ${VIEW_HEIGHT + 20}px)`
}

/**
 * Returns the X coordinate for maps or labels in a given tier.
 */
export function getXCoordForTierNumber (tier: number) {

  return tierXCoords[tier - 1]
}
