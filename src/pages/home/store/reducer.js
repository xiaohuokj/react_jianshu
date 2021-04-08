import *as actionTypes from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS ({
  articleList: [],
  recommendList: [],
  showScroll: false,
  authorList: [
    {
      id: 1,
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/6652326/21cbdf91-a930-45d2-ad61-4f91df1e9709.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "野狐狸"
    },
    {
      id: 2,
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: " 卢璐说"
    },
    {
      id: 3,
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "简书钻首席小管家"
    },
    {
      id: 4,
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "茶点故事"
    },
    {
      id: 5,
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/6652326/21cbdf91-a930-45d2-ad61-4f91df1e9709.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "野狐狸"
    },
    {
      id: 6,
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: " 卢璐说"
    }
  ],
});

// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      // state.set('articleList', fromJS(action.articleList)).set('recommendList', fromJS(action.recommendList))
      // 简写
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case actionTypes.ADD_ARTICLE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.list))
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}
