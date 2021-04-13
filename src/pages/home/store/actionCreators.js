import *as actionTypes from './actionTypes'
import {fromJS} from "immutable";
import axios from "axios";

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/asimov/trending/now?count=15&note_ids[]=').then((res) => {
      const result = res.data;
      const resultArray = []
      result.map((item)  => {
        return resultArray.push(item.object.data)
      })
      const action = {
        type: actionTypes.CHANGE_HOME_DATA,
        articleList: resultArray,
      }
      /*const result = res.data.data
      const action = {
        type: actionTypes.CHANGE_HOME_DATA,
        articleList: result.articleList,
        recommendList: result.recommendList
      }*/
      dispatch(action);
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/asimov/trending/now?count=15&note_ids[]=').then((res) => {
      const results = res.data;
      const resultArrays = []
      results.map((item)  => {
        return resultArrays.push(item.object.data)
      })
      const action = {
        type: actionTypes.ADD_ARTICLE_LIST,
        list: fromJS(resultArrays)
      }
      /*const result = res.data.data;
      const action = {
        type: actionTypes.ADD_ARTICLE_LIST,
        list: fromJS(result)
      }*/
      dispatch(action);
    })
  }
}

export const getrecommendRad = () => {
  return (dispatch) => {
    axios.get('/api/shakespeare/notes/a0b208d7e03e/recommendations').then((res) => {
      const result = res.data;
      const action = {
        type: actionTypes.CHANGE_HOME_RECOMMENDRAD,
        recommendRadList: fromJS(result)
      }
      dispatch(action);
    })
  }
}


export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
})
