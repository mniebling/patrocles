import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { maps } from './map-data'
import { tiers } from './tiers'

import { completedMapsCount, totalMapsCount } from './getters'
import {
  acquireMap,
  acquireTier,
  clearMap,
  clearTier,
  completeMap,
  completeTier,
  initializeStore
} from './mutations'

Vue.use(Vuex)

export interface RootState {
  maps: App.Map[]
  tiers: App.Tier[]
}

const store: StoreOptions<RootState> = {
  state: {
    maps,
    tiers
  },
  getters: {
    completedMapsCount,
    totalMapsCount
  },
  mutations: {
    acquireMap,
    acquireTier,
    clearMap,
    clearTier,
    completeMap,
    completeTier,
    initializeStore
  }
}

export default new Vuex.Store<RootState>(store)
