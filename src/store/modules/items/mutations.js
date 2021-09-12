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
  [SET_ITEMS](state, payLoad) {
    state.items = payLoad
  },
  [SET_PAGE_NO](state, payLoad) {
    state.pageNo = payLoad
  },
  [SET_TOTAL_COUNT](state, payLoad) {
    state.totalCount = payLoad
  },
  [ADD_SELECTED_ITEMS](state, payLoad) {
    state.selectedItems.push(payLoad) 
  },
  [REMOVE_SELECTED_ITEMS](state, payLoad) {
    var removeIndex = state.selectedItems.map(function(item) { return item.item_id; }).indexOf(payLoad.item_id);
    state.selectedItems.splice(removeIndex, 1);
  },
  [CLEAR_SELECTED_ITEMS](state) {
    state.selectedItems = []
  },
  [UPDATE_QUANTITY_NEEDED](state, payload) {
    const updateIndex = state.items.map(function(item) { return item.item_id; }).indexOf(payload.item_id);
    state.items[updateIndex].quantity_needed = payload.quantity_needed
  }


}
