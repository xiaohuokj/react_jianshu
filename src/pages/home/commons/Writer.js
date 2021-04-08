import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {WriterWrapper, WriterTitle, WriterList} from '../style'

class Writer extends PureComponent {
  render() {
    const {list} = this.props;
    return (
        <WriterWrapper>
          <WriterTitle>
            <div className='titleLeft'>推荐作者</div>
            <div className='titleRight'>换一批</div>
          </WriterTitle>
          {list.map((item) => {
            return <WriterList key={item.get('id')}>
              <span className='avatar'>
                <img src={item.get('imgUrl')} alt=""/>
              </span>
              <span className='follow'>
                <i>关注</i>
              </span>
              <div className='text'>
                <span className='name'>{item.get('name')}</span>
                <p >写了0字 · 6.3k喜欢</p>
              </div>
            </WriterList>
          })}
        </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('authorList')
})

export default connect(mapState, null)(Writer);
