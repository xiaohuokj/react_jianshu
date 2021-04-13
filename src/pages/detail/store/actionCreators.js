import *as actionTypes from './actionTypes'
import axios from "axios";

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/asimov/p/' + id).then((res) => {
      const result = res.data
      const action = {
        type: actionTypes.CHANGE_DETAIL,
        title: result.public_title,
        content: result.free_content, // .replace(/<[^>]+>/g,"")
        image_url:result.share_image_url
      }
      /*const result = res.data.data;
      const action = {
        type: actionTypes.CHANGE_DETAIL,
        title: result.title,
        content: result.content
      }*/
      dispatch(action);
    })
  }
}
