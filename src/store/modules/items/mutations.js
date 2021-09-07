import {
  SET_ITEMS,
  SET_PAGE_NO,
  SET_TOTAL_COUNT
} from './mutation-types'

export default {
  [SET_ITEMS](state, payLoad) {
    state.items = payLoad
  },
  [SET_PAGE_NO](state, payLoad) {
    state.pageNo = payLoad
  },
  [SET_TOTAL_COUNT](state, payLoad) {
    state.totalCount = payLoad
  },
}
