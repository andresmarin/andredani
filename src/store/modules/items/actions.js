import {
  SET_ITEMS,
  SET_PAGE_NO,
  SET_TOTAL_COUNT,
  ADD_SELECTED_ITEMS,
  REMOVE_SELECTED_ITEMS,
  CLEAR_SELECTED_ITEMS,
  UPDATE_QUANTITY_NEEDED
} from './mutation-types'


export default {
  setItems({commit}, newData) {
    commit(SET_ITEMS, newData)
  },
  setPageNo({commit}, newData) {
    commit(SET_PAGE_NO, newData)
  },
  setTotalCount({commit}, newData) {
    commit(SET_TOTAL_COUNT, newData)
  },
  addSelectedItems({ commit }, newData){
    commit(ADD_SELECTED_ITEMS, newData)
  },
  removeSelectedItems({ commit }, newData){
    commit(REMOVE_SELECTED_ITEMS, newData)
  },
  clearSelectedItems({ commit }, newData){
    commit(CLEAR_SELECTED_ITEMS, newData)
  },
  updateQuantityNeeded({ commit }, newData){
    commit(UPDATE_QUANTITY_NEEDED, newData)
  }
}
