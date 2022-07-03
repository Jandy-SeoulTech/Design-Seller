import React from 'react'
import {Box, Button} from '@mui/material'
import ImgSlicker from '../common/ImgSlicker'
import styled from 'styled-components'
import btnSubmit from "../../assets/img/orderBtn.png"
import ItemOptionSelector from './ItemOptionSelector'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

function ItemSummary({itemInfo}) {
    const navigate = useNavigate();
    const {id, company, name, productionThumbnailImage, category, options ,description, like} = itemInfo;
    const [cookies, ] = useCookies(['user_token']);

    const goOrderHandler = () => {
        navigate(`/makeit/order/${id}/${cookies.user_token}`)
    }

  return (
    <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={6} sx={{
        maxWidth: 'lg',
        height: 600,
        m : '0 auto',
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column', mr: 5}}>
            <ImgSlicker imgs={[productionThumbnailImage]}></ImgSlicker>
        </Box>
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', ml: 5}}>
            <ItemName>{name}</ItemName>
            <ItemDetails>
                <ItemDetailLabel>업체</ItemDetailLabel>
                <ItemDetailContent>{company}</ItemDetailContent>
            </ItemDetails>
            <Line></Line>
            <ItemDetails>
                <ItemDetailLabel>상품 정보</ItemDetailLabel>
                <ItemDetailContent>{category}</ItemDetailContent>
            </ItemDetails>
            <Line></Line>
            <ItemDetails>
                <ItemDetailLabel>상품 옵션</ItemDetailLabel>
            </ItemDetails>
            <ItemDetails>
                <ItemOptionSelector options={options}></ItemOptionSelector>
            </ItemDetails>
            <Box sx={{mt: 5,}}>
            <Button onClick={goOrderHandler}><img src={btnSubmit} alt="orderSubmit"></img></Button>
            </Box>
        </Box>
    </Box>
  )
}

const ItemName = styled.h2`
    text-align : left;
    font-size: 36px;
    line-height: 44px;
`
const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  width: 100%;
`;

const ItemDetails = styled.div`
    display : block;
    position : relative;
    margin-bottom : 50px
`

const ItemDetailLabel = styled.div`
    position : absolute;
    left : 10px;
    font-size: 16px;
    line-height: 50px;
    font-weight : bold;
    margin-botton: 30px;
`

const ItemDetailContent = styled.ul`
    position : absolute;
    left : 200px;
    font-size: 16px;
    line-height: 24px;
`


export default ItemSummary