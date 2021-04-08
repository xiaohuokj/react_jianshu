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
`;

export const WriterTitle = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #969696;
  .titleLeft {
    float: left;
  }
  .titleRight {
    float: right;
  }
`;

export const WriterList = styled.div`
  margin-top: 25px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: block;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    i {
      position: inherit;
      width: inherit;
      height: inherit;
      font-size: 13px;
    }
  }
  .text {
    margin-right: 100px;
    .name {
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
      display: block;
    }
    p {
      margin-top: 12px;
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
