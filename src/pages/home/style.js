import styled from 'styled-components';

export const HomeWrapper = styled.div`
  /*overflow: hidden;*/
  width: 960px;
  margin: 0 auto;
  height: 300px;
  padding-top: 50px;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const ListItem = styled.div`
  overflow: hidden;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .pic {
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  overflow: hidden;
  width: 450px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  height: 300px;
  text-align: center;
  padding-left: 50px;
`;

export const WriterTitle = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #969696;
  .titleLeft {
    float: left;
    font-size: 18px;
    font-weight: 500;
    color: #404040;
  }
  .titleRight {
    float: right;
  }
`;

export const WriterList = styled.div`
  margin-top: 18px;
  .listitem {
    text-align: left;
    .listitem_title1 {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .listitem_title2 {
      font-size: 12px;
      color: #969696;
    }
  }
`;


export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;  
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`;
