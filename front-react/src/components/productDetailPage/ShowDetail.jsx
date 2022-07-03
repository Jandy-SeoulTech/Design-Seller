import React from "react";
import styled from "styled-components";
import Grid from "../common/Grid";
function ShowDetail(props) {
  console.log(props);
  const tapClick = (e) => {
    e.target.classList.add("clicked");
    e.target.value.scrollIntoView();
  };

  return (
    <>
      <Tap>
        <Ul>
          <Li onClick={tapClick}>
            <a>상품설명</a>
          </Li>
          <Li onClick={tapClick}>
            <a>상세 정보</a>
            {/* 상품 정보 이미지  */}
            {/* <ImgBox /> */}
          </Li>
        </Ul>
      </Tap>
    </>
  );
}
const ImgBox = styled.div`
  margin: 100px auto 30px auto;
  width: 57%;
  align-items: center;
`;
const Tap = styled.div`
margin-top: 50px;
padding-bottom: 40px;
background-color: #ffffff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
width: 700px;
margin: 0 auto;}
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: rgb(250, 250, 250);
`;
const Li = styled.div`
  width: calc(100% / 3);
  height: 50px;
  border-bottom: 3px solid #333333;
  background-color: #f8f8f8;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #333333;
  display: block;
  float: left;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;
`;
export default ShowDetail;
