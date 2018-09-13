import { RootState } from './store'


export function completedMapsCount(state: RootState) {
  return state.maps.filter(m => m.completed).length
}

export function totalMapsCount(state: RootState) {
  return state.maps.length
}
