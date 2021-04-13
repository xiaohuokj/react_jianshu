import *as actionTypes from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS ({
  articleList: [],
  recommendList: [],
  showScroll: false,
  recommendRad: [],
});

// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      // state.set('articleList', fromJS(action.articleList)).set('recommendList', fromJS(action.recommendList))
      // 简写
      return state.merge({
        articleList: fromJS(action.articleList),
        // recommendList: fromJS(action.recommendList)
      })
    case actionTypes.CHANGE_HOME_RECOMMENDRAD:
      return state.set('recommendRad', action.recommendRadList)
    case actionTypes.ADD_ARTICLE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.list))
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}
