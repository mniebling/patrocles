import store from '@/store/store'


/** Returns the number of maps in a given tier. */
export function countMapsInTier(tier: number) {
  return getMapsInTier(tier).length
}

export function getMapAtId(id: number) {
  return store.state.maps.find(map => map.id === id)
}

export function getMapByName(name: string) {
  const result = store.state.maps.find(map => map.name === name)

  if (result === undefined) {
    throw new Error(`No map named "${name}" exists.`)
  }

  return result
}

/** Returns all maps in a given tier. */
export function getMapsInTier(tier: number) {
  return store.state.maps.filter(m => m.tier === tier)
}

/** Returns the 0-indexed ordinal position of a given map in its tier. */
export function positionInTier(map: App.Map) {
  return getMapsInTier(map.tier).indexOf(map)
}
