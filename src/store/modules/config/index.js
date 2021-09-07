import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './initial-state'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}