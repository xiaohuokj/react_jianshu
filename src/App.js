import React, {Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import {ResetStyle} from './style.js';
import Header from "./common/header";
import store from "./store"; // 是当前header组件内的store


class App extends Component {
  render() {
    return (
        <Fragment>
          <Provider store={store}>
            <ResetStyle />
            <Header />
          </Provider>
        </Fragment>
    );
  }
}
export default App;
