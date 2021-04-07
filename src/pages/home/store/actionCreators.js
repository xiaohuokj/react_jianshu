import *as actionTypes from './actionTypes'
import {fromJS} from "immutable";
import axios from "axios";

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: actionTypes.CHANGE_HOME_DATA,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      dispatch(action);
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: actionTypes.ADD_ARTICLE_LIST,
        list: fromJS(result)
      }
      dispatch(action);
    })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
})
