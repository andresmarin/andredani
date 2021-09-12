export default {
  items: state => {
    return state.items
  },
  pageno: state => {
    return state.pageno
  },
  pagesize: state => {
    return state.pagesize
  },
  total_count: state => {
    return state.totalCount
  },
  selectedItems: state => {
    return state.selectedItems
  },
}
