import React, {Component, Fragment } from 'react';
import {connect} from "react-redux";
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store/index';
import {
  HeaderWidthLimit,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button,

} from './style'

// 简写后 移除最底部 Component
/*const Header = (props) => {
   return {
      // 下面return中的内容
   }
}*/


class Header extends Component {

  render() {
    const {focused, handleIputFocus, handleBlur} = this.props
    return (
        <Fragment>
          <HeaderWidthLimit>
            <HeaderWrapper>
              <Logo />
              <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                  <i className="iconfont">&#xe636;</i>
                </NavItem>

                <SearchWrapper>
                  <CSSTransition
                      in={focused}
                      timeout={200}
                      classNames="slide"
                  >
                    <Fragment>
                      <NavSearch className={focused ? 'focused' : ''} onFocus={handleIputFocus} onBlur={handleBlur}></NavSearch>
                      <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
                    </Fragment>
                  </CSSTransition>
                  {this.getListArea()}
                </SearchWrapper>
              </Nav>
              <Addition>
                <Button className='writting'>
                  <i className="iconfont">&#xe615;</i>
                  写文章
                </Button>
                <Button className='reg'>注册</Button>
              </Addition>
            </HeaderWrapper>
          </HeaderWidthLimit>
        </Fragment>

    )
  }
  getListArea() {
    // const { handleChangePage, page, totalPage} = this.props;
    const newList = this.props.list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = ((this.props.page - 1) * 10); i < this.props.page * 10; i++) {
        pageList.push(
            <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (this.props.focused || this.props.mouseIn) {
      return (
          <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage)}>换一换</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIputFocus() {
      dispatch(actionCreators.getList());
      dispatch( actionCreators.searchFocus());
    },

    handleBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
