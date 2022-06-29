import { Box } from "@mui/material";
import { React, useState, useEffect } from "react";
import ListSquareEle from "./element/ListSquareEle";
import styled from "styled-components";

function ListCircle1x5({header, items}) {
    //얻어오는 데이터에 따라 market or makeit로 구분-> 하위 element의 link 가 바뀌게 됨
    const link = "makeit/detail"; 
    console.log(items);
  
  return (
    <div>
      <StyledH>{header}<MoreBtn>더보기</MoreBtn></StyledH>
        <Box display="grid" gridTemplateColumns="repeat(5,1fr)" gap={1}
            sx={{
              mt : 4,
              mb : 4,
            }}>
            {items && items.map((item, index) => 
            <div key={index}>
            <Box gridRow={1} sx={{
                textAlign: 'left' 
            }}>
              <ListSquareEle item={item} size={220} link={link}></ListSquareEle>
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

const MoreBtn = styled.button`
  position: absolute;
  right: 3px;
`;

export default ListCircle1x5;
