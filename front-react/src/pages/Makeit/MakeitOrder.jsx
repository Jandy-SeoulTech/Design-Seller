import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Box, Container, Divider, Typography, Button } from "@mui/material";
import styled from "styled-components";
import Header from "../../components/common/Header";
import DesignUploader from "../../components/makeitPage/DesignUploader";
import purchaseBtn from "../../assets/img/purchaseBtn.png";

function MakeitOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookie] = useCookies(["user_token"]);
  const uploadSuccess = useSelector((state) => state.purchase.fileUploadState);

  const shoppingList = useSelector((state) => state.purchase.shoppingList);
  const totalPrice = useSelector((state) => state.purchase.totalPrice);
  const itemInfo = useSelector((state) => state.category.itemInfo);
  const now = new Date();
  const dateStr =
    now.getFullYear() +
    "년 " +
    (now.getMonth() + 1) +
    "월 " +
    now.getDate() +
    "일";

  useEffect(() => {
    if (Object.keys(itemInfo).length === 0 || shoppingList.length === 0) {
      alert("옵션을 하나 이상 선택하세요");
      navigate(-1);
    }
    if (cookie.user_token === undefined) {
      alert("로그인 세션이 없습니다.");
      navigate(-1);
    }
  });

  const nextLink = (e) => {
    e.preventDefault();
    if (uploadSuccess === "completed") {
      const nexturl = "/makeit/purchase/" + id + "/" + cookie.user_token;
      navigate(nexturl);
    } else alert("도안 파일이 업로드 되지 않았습니다.");
  };
  return (
    <div>
      <Header></Header>
      <Container maxWidth="lg" sx={{ textAlign: "left" }}>
        <StyledH2>주문서</StyledH2>
        <StyledH3>상품 정보</StyledH3>
        <Divider></Divider>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 3, mb: 3 }}>
          <Box
            component="img"
            sx={{ width: "165px", height: "165px" }}
            src={itemInfo.productionThumbnailImage}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 4,
              justifyContent: "space-between",
            }}
          >
            <Typography>
              {itemInfo.name} / {itemInfo.company}
            </Typography>
            <Typography>{dateStr}</Typography>
            <Typography>{itemInfo.category}</Typography>
            {shoppingList.map((ele, idx) => (
              <Typography key={idx}>
                {ele.name} / {ele.amount} 개
              </Typography>
            ))}
          </Box>
        </Box>
        <Divider></Divider>
        <StyledH3>총 상품 가격</StyledH3>
        <StyledPrice>{totalPrice.toLocaleString()} 원</StyledPrice>
        <StyledH3>도안서</StyledH3>
        <Divider></Divider>
        <Box>
          <DesignUploader></DesignUploader>
        </Box>
        <Divider></Divider>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={nextLink}>
          <Box component="img" src={purchaseBtn}></Box>
        </Button>
      </Container>
    </div>
  );
}

const StyledH2 = styled.h2`
  font-size: 32px;
`;
const StyledPrice = styled.h2`
  font-size: 32px;
  text-align: right;
`;

const StyledH3 = styled.h3`
  font-size: 22px;
`;
export default MakeitOrder;
