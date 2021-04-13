import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: "",
  content: "",
  image_url: ""
})

// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.set('title', action.title).set('content', action.content).set('image_url', action.image_url)
    default:
      return state;
  }
}
