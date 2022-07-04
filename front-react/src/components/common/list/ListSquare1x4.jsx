import { Box } from '@mui/material'
import { React, useState } from 'react'
import ListSquareEle from './element/ListSquareEle'
import styled from "styled-components";
import { useSelector } from 'react-redux';

function ListCircle1x4({header, items = []}) {
    //Type: 얻어오는 데이터에 따라 market or makeit로 구분 -> 하위 element의 link 가 바뀌게 됨
    const [type, settype] = useState('makeit');

  return (
    <div>
      <StyledH>{header}<MoreBtn>더보기</MoreBtn></StyledH>
        <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap={2}
        maxWidth=''
            sx={{
              mt : 4,
              mb : 4,
            }}>
            {items && items.map((item, index) => 
            <div key={index}>
            <Box gridRow={1} sx={{
                textAlign: 'left' 
            }}>
              <ListSquareEle item={item} size={270} type={type}></ListSquareEle>
            </Box>
            </div>
            )}
        </Box>
    </div>
  )
}


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


export default ListCircle1x4