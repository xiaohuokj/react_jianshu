import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {WriterWrapper, WriterTitle, WriterList} from '../style';
import {actionCreators} from '../store/index'

class Writer extends PureComponent {
  render() {
    const {recommendRadList} = this.props;
    return (
        <WriterWrapper>
          <WriterTitle>
            <div className='titleLeft'>推荐阅读</div>
          </WriterTitle>
          {recommendRadList.map((item, index) => {
            return <WriterList key={index}>
              <div className="listitem">
                <div className="listitem_title1">
                  <span>{item.get('title')}</span>
                </div>
                <div className="listitem_title2">阅读 {item.get('views_count')}</div>
              </div>
            </WriterList>
          })}
        </WriterWrapper>
    )
  }

  componentDidMount() {
    this.props.getrecommendRad()
  }
}

const mapState = (state) => ({
  recommendRadList: state.get('home').get('recommendRad')
})

const mapDispatch = (dispatch) => ({
  getrecommendRad() {
    dispatch(actionCreators.getrecommendRad())
  }
})

export default connect(mapState, mapDispatch)(Writer);
