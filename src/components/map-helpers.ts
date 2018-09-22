import { maps } from '@/store/map-data'
import store from '@/store/store'


export function countMapsInTier(tier: number) {
  return maps.filter(m => m.tier === tier).length
}

export function getMapAtId(id: number) {
  return store.state.maps.find(map => map.id === id)
}

export function getMapByName(name: string) {
  const result = store.state.maps.find(map => map.name === name)

  if (result === undefined) {
    throw new Error(`No map exists with that name.`)
  }

  return result
}
