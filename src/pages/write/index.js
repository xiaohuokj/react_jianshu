import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Write extends Component {
  render() {
    const {loginStatus} = this.props;
    if (loginStatus) {
      return (
          <div>写文章页面</div>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.get('login').get('login')
})

export default connect(mapState, null)(Write);
