import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { useParams, useNavigate } from 'react-router-dom'
// import { useCookies } from 'react-cookie';
import { Box, Container, Divider, Button } from "@mui/material";
import styled from "styled-components";
import Header from "../../components/common/Header";
import InputRequesterInfo from "../../components/makeitPage/InputRequesterInfo";
import InputDeliveryInfo from "../../components/makeitPage/InputDeliveryInfo";
import purchaseBtn from "../../assets/img/purchaseBtn.png";
import { useCookies } from "react-cookie";
import {API_BASE_URL} from "../../reducers/APIconfig"

function MakeitPurchase() {
  const totalPrice = useSelector((state) => state.purchase.totalPrice);
  const requestData = useSelector((state) => state.purchase.requestData);
  const [cookies, ] = useCookies([]);

  const sendRequestHandler = () => {
    const token = cookies.user_token;
    const data = JSON.stringify(requestData);
    postRequestNew(data,token);
  }

  const postRequestNew = async (data,token) => {
    try {
        const response = await axios.post(API_BASE_URL + "/request/new", data, 
        { headers : { "Content-Type": "application/json", Authorization: token }}
        )
        return response.data;
    } catch (err) {
        return err.message;
    }
} 

  return (
    <div>
      <Header></Header>
      <Container maxWidth="lg" sx={{ textAlign: "left" }}>
        <StyledH2>주문결제</StyledH2>
        <StyledH3>최종 결재 금액</StyledH3>
        <Divider></Divider>
        <Box sx={{ display: "flex", flexDirection: "column", height: 150 }}>
          <Box sx={{ m: 3, position: "relative" }}>
            <StyledpriceLabel2>주문 금액</StyledpriceLabel2>
            <StyledPrice2>{totalPrice.toLocaleString()} 원</StyledPrice2>
          </Box>
          <Box sx={{ m: 3, position: "relative" }}>
            <StyledpriceLabel2>배송비</StyledpriceLabel2>
            <StyledPrice2>+3,000 원</StyledPrice2>
          </Box>
        </Box>
        <Divider></Divider>
        <StyledH3>총 결제 예상 금액</StyledH3>
        <StyledPrice>{(totalPrice + 3000).toLocaleString()} 원</StyledPrice>
        <InputRequesterInfo></InputRequesterInfo>
        <br></br>
        <br></br>
        <InputDeliveryInfo></InputDeliveryInfo>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={sendRequestHandler}>
          <Box component="img" src={purchaseBtn}></Box>
        </Button>
      </Container>
    </div>
  );
}

export default MakeitPurchase;

const StyledH2 = styled.h2`
  font-size: 32px;
`;

const StyledH3 = styled.h3`
  font-size: 22px;
`;

const StyledPrice2 = styled.div`
  font-size: 20px;
  position: absolute;
  line-height: 9px;
  right: 5px;
`;

const StyledpriceLabel2 = styled.div`
  font-size: 20px;
  position: absolute;
  line-height: 9px;
  left: 5px;
`;
const StyledPrice = styled.h2`
  font-size: 32px;
  text-align: right;
`;
