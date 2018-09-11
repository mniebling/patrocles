import { RootState } from './store'


export function completedMapsCount(state: RootState) {
  return state.maps.filter(m => m.completed).length
}
