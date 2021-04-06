import React, {Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import {ResetStyle} from './style.js';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./common/header";
import Home from './pages/home';
import Detail from './pages/detail';
import store from "./store"; // 是当前header组件内的store


class App extends Component {
  render() {
    return (
        <Fragment>
          <Provider store={store}>
            <ResetStyle />
            <Header />
            <BrowserRouter>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </BrowserRouter>
          </Provider>
        </Fragment>
    );
  }
}
export default App;
