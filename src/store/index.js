import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import items from './modules/items'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default function createStore() {
  return new Vuex.Store({
    modules: {
      config,
      items
    },
    strict: debug
  })
}
