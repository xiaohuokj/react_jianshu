import *as actionTypes from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS ({
  login: false
});

// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value)
    case actionTypes.LOGOUT:
      return state.set('login', action.value)
    default:
      return state;
  }
}
