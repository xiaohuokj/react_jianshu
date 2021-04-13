import React, {Component} from "react";
import {connect} from "react-redux";
// import {withRouter} from 'react-router-dom';
import {DetailWrapper, Header, Content} from './style';
import {actionCreators} from './store'

class Detail extends Component {
  render() {
    const {public_title, free_content, share_image_url} = this.props
    return (
        <DetailWrapper>
          <Header>{public_title}</Header>
          <Content dangerouslySetInnerHTML={{__html: free_content}} />
          <img className='imge' src={share_image_url} alt=""/>
        </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
    window.scrollTo(0, 0)
  }
}

const mapState = (state) => ({
  public_title: state.get('detail').get('title'),
  free_content: state.get('detail').get('content'),
  share_image_url: state.get('detail').get('image_url')
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(Detail);
