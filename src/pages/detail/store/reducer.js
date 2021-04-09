import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: "",
  content: ""

})

// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.set('title', action.title).set('content', action.content)
    default:
      return state;
  }
}
