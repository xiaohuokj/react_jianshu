import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {LoginWrapper, LoginBox, Input, Button} from './style'
import { actionCreators } from './store';

class Login extends Component {
  render() {
    const {loginStatus} = this.props;
    if (!loginStatus) {
      return (
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='账号' ref={(input) => this.account = input}></Input>
              <Input placeholder='密码' type='password' ref={(input) => this.password = input}></Input>
              <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }

}

const mapState = (state) => ({
  loginStatus: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle.value, passwordEle.value))
  }
})

export default connect(mapState, mapDispatch)(Login);
