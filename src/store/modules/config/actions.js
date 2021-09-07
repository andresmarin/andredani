import {
  SET_TOKEN
} from './mutation-types'


export default {
  setToken({
    commit
  }, newData) {
    commit(SET_TOKEN, newData)
  }
}
