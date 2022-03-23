import Vue from 'vue'
import Vuex from 'vuex'
import basic from 'gw-basics'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    basic: basic.store
  },
  getters: {
    ...getters,
    ...basic.getters
  },
})

export default store
