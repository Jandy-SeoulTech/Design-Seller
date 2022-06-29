import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Box } from "@mui/system";
import { Divider, Container } from "@mui/material";

import Grid from "../components/common/Grid";
import Banner from "../components/mainPage/Banner";
// import product_list from "../assets/json/product_list.js";
import { Header, SearchBox, Product } from "../components/common";
import productSlice from "../reducers/productApi";
import { getAllPrdDB } from "../reducers/productApi";
import ListSquare1x5 from "../components/common/list/ListSquare1x5";

function Main() {
  const prd_list = useSelector((state) => state.prd.list);
  const dispatch = useDispatch();
  const headers = [
    "북적북적 지금 핫한 아이템들",
    "놓치면 후회할 가격",
    "이 제품 어때요?",
  ];
  const [headerPrd, setHeaderPrd] = useState({
    hotPrd_list: prd_list.slice(0, 5),
    benefitPrd_list: prd_list.slice(6, 11),
    howAboutPrd_list: prd_list.slice(15, 20),
    // buttonList: prd_list.products.slice(18, 26),
  });
  useEffect(() => {
    // 상품 리스트를 db에서 받아오기
    dispatch(getAllPrdDB());
  }, []);
  return (
    <>
      <Grid>
        <Header />
        <Banner />
        <Grid margin="25px 0 0 0">
          <Grid width="1140px" margin="auto" is_flex wrap>
            <Grid classname="HashTag">인기 해쉬태그</Grid>
            <Container sx={{ alignItems: "center" }}>
              <Box maxWidth="lg" minWidth="sm">
                <SearchBox />
                <ListSquare1x5
                  header={headers[0]}
                  type="market"
                  productList={headerPrd.hotPrd_list}
                ></ListSquare1x5>
                <Divider variant="middle" sx={{ width: "100%" }}></Divider>
                <ListSquare1x5
                  header={headers[1]}
                  type="market"
                  productList={headerPrd.benefitPrd_list}
                ></ListSquare1x5>
                <Divider variant="middle" sx={{ width: "100%" }}></Divider>
                <ListSquare1x5
                  header={headers[2]}
                  type="market"
                  productList={headerPrd.howAboutPrd_list}
                ></ListSquare1x5>
              </Box>
            </Container>
          </Grid>
        </Grid>

        {/* {prd_list.map((product) => {
          return <Product key={product.id} id={product.id} {...product} />;
        })} */}
      </Grid>
    </>
  );
}

export default Main;
