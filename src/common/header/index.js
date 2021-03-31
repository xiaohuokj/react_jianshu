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
  NavSearch,
  Addition,
  Button
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

}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
    },

    handleBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
