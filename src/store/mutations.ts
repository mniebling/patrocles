import { RootState } from './store'
import { Store } from 'vuex'


/** Indicate that a map has been acquired (but not completed). */
export function acquireMap (state: RootState, targetMap: App.Map) {

  state.maps.forEach(map => {
    if (map.id === targetMap.id) { map.owned = true }
  })

  if (state.maps
    .filter(map => map.tier === targetMap.tier)
    .every(map => map.owned === true)
  ) {
    state.tiers[targetMap.tier - 1].owned = true
  }
}

/** Indicate that all maps in the tier are owned but not completed. */
export function acquireTier (state: RootState, targetTier: App.Tier) {

  state.tiers.forEach(tier => {
    if (targetTier.number === tier.number) {
      tier.completed = false
      tier.owned = true
    }
  })

  state.maps.forEach(map => {
    if (map.tier === targetTier.number && !map.completed) {
      map.owned = true
    }
  })
}

/** Reset a map's status. */
export function clearMap (state: RootState, targetMap: App.Map) {

  state.maps.forEach(map => {
    if (map.id === targetMap.id) {
      map.completed = false
      map.owned = false
    }
  })
}

/** Reset a tier's status, setting all maps in the tier to "unowned". */
export function clearTier (state: RootState, targetTier: App.Tier) {

  state.tiers.forEach(tier => {
    if (targetTier.number === tier.number) {
      tier.completed = false
      tier.owned = false
    }
  })

  state.maps.forEach(map => {
    if (map.tier === targetTier.number) {
      map.completed = false
      map.owned = false
    }
  })
}

/** Indicate that a map has been completed. */
export function completeMap (state: RootState, targetMap: App.Map) {

  state.maps.forEach(map => {
    if (map.id === targetMap.id) { map.completed = true }
  })

  if (state.maps
    .filter(map => map.tier === targetMap.tier)
    .every(map => map.completed === true)
  ) {
    state.tiers[targetMap.tier - 1].completed = true
  }
}

/** Indicate that all maps in a tier have been completed. */
export function completeTier (state: RootState, targetTier: App.Tier) {

  state.tiers.forEach(tier => {
    if (targetTier.number === tier.number) {
      tier.completed = true
      tier.owned = true
    }
  })

  state.maps.forEach(map => {
    if (map.tier === targetTier.number) {
      map.completed = true
      map.owned = true
    }
  })
}

/** Load the data from localstorage, if available. */
export function initializeStore (this: Store<RootState>, state: RootState) {

  if (localStorage.getItem('patrocles:store') === null) {
    return
  }

  const localState = JSON.parse(localStorage.getItem('patrocles:store') || '')

  this.replaceState({ ...state, ...localState })
}
