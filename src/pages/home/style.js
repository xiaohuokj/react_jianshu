import styled from 'styled-components';

export const HomeWrapper = styled.div`
  /*overflow: hidden;*/
  width: 960px;
  margin: 0 auto;
  height: 300px;
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
  width: 240px;
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
    border-radius: 10px;
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

