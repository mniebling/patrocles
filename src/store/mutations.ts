import { RootState } from './store'
import { Store } from 'vuex'

/** Indicate that a map has been acquired (but not completed). */
export function acquireMap(state: RootState, id: number) {
  state.maps.forEach(map => {
    if (map.id === id) { map.owned = true }
  })
}

/** Reset a map's status. */
export function clearMap(state: RootState, id: number) {
  state.maps.forEach(map => {
    if (map.id === id) {
      map.completed = false
      map.owned = false
    }
  })
}

/** Indicate that a map has been completed. */
export function completeMap(state: RootState, id: number) {
  state.maps.forEach(map => {
    if (map.id === id) { map.completed = true }
  })
}

/** Load the data from localstorage, if available. */
export function initializeStore(this: Store<RootState>, state: RootState) {
  if (localStorage.getItem('patrocles:store') === null) {
    return
  }

  const localState = JSON.parse(localStorage.getItem('patrocles:store') || '')

  this.replaceState({ ...state, ...localState })
}
