import *as actionTypes from './actionTypes';
import axios from 'axios';

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})

export const login = (accout, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?accout=' + accout + '&password=' + password).then((res) => {
      const result = res.data.data;
      if (result) {
        const action = {
          type: actionTypes.CHANGE_LOGIN,
          value: true,
        }
        dispatch(action)
      } else {
        alert("登录失败")
      }
    })
  }
}
