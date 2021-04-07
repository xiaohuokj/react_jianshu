import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import List from './commons/List';
import Recommend from './commons/Recommend';
import Writer from './commons/Writer';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import {actionCreators} from './store/index'

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

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
          {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
        </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.get("home").get("showScroll")
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 500) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);
