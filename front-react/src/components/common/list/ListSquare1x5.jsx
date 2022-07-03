import { Box } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListSquareEle from "./element/ListSquareEle";
import styled from "styled-components";

function ListSquare1x5({ header, link, productList }) {
  //얻어오는 데이터에 따라 market or makeit로 구분-> 하위 element의 link 가 바뀌게 됨
  const [items, setitems] = useState(
    productList
      ? productList
      : [
          {
            id: 1,
            factory: "블루프린팅",
            item: "자개아크릴",
            price: 3000,
            like: 120,
          },
          {
            id: 2,
            factory: "블루프린팅",
            item: "인쇄 하트 아크릴",
            price: 3000,
            like: 120,
          },
          {
            id: 3,
            factory: "블루프린팅",
            item: "기본 무제 노트",
            price: 3000,
            like: 120,
          },
          {
            id: 4,
            factory: "블루프린팅",
            item: "무광 카페 스티커",
            price: 3000,
            like: 120,
          },
          {
            id: 5,
            factory: "블루프린팅",
            item: "무광 카페 스티커",
            price: 3000,
            like: 120,
          },
        ]
  );
  console.log(items);

  return (
    <div>
      <StyledH>
        {header}
        <MoreBtn to="product/category" productList={items}>
          더보기
        </MoreBtn>
      </StyledH>
      <Box
        display="grid"
        gridTemplateColumns="repeat(5,1fr)"
        gap={1}
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <Box
                gridRow={1}
                sx={{
                  textAlign: "left",
                }}
              >
                <ListSquareEle
                  item={item}
                  size={220}
                  link={link}
                ></ListSquareEle>
              </Box>
            </div>
          ))}
      </Box>
    </div>
  );
}
const StyledH = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const MoreBtn = styled(Link)`
  position: absolute;
  right: 3px;
`;

export default ListSquare1x5;
