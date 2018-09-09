import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { maps } from './map-data'
import { acquireMap, clearMap, completeMap, initializeStore } from './mutations'

Vue.use(Vuex)

export interface RootState {
  maps: App.Map[]
}

const store: StoreOptions<RootState> = {
  state: {
    maps
  },
  mutations: {
    acquireMap,
    clearMap,
    completeMap,
    initializeStore
  }
}

export default new Vuex.Store<RootState>(store)
