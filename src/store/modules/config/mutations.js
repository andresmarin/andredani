import {
  SET_TOKEN
} from './mutation-types'

export default {
  [SET_TOKEN](state, payLoad) {
    state.token = payLoad
  }
}
