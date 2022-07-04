import { Box } from '@mui/material'
import { React, useState } from 'react'
import ListSquareEle from './element/ListSquareEle'
import styled from "styled-components";
import { useSelector } from 'react-redux';

function ListSquare({header, column, items, link}) {
    const gridCols = `repeat(${column}, 1fr)`;
    const size = 1100/column;

  return (
    <div>
    <StyledH>{header}<MoreBtn>더보기</MoreBtn></StyledH>
      <Box display="grid" gridTemplateColumns={gridCols} gap={1}
          sx={{
            mt : 4,
            mb : 4,
          }}>
          {items && items.map((item, index) => 
          <div key={index}>
          <Box gridRow={1} sx={{
              textAlign: 'left' 
          }}>
            <ListSquareEle item={item} size={size} link={link}></ListSquareEle>
          </Box>
          </div>
          )}
      </Box>
  </div>
)
}

export default ListSquare

const StyledH = styled.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    position : relative;
`;

const MoreBtn = styled.button`
    position : absolute;
    right : 3px
`
