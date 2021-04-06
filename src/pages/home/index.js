import React, {Component} from "react";
import List from './commons/List';
import Recommend from './commons/Recommend';
import Writer from './commons/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style'

class Home extends Component {
  render() {
    return (
        <HomeWrapper>
          <HomeLeft>
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
    )
  }
}

export default Home;
