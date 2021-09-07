import {
  SET_ITEMS,
  SET_PAGE_NO,
  SET_TOTAL_COUNT
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
  }
}
