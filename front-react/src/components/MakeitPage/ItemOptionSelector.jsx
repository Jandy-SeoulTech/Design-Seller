import React, { useEffect } from 'react'
import {Box} from '@mui/material'
import styled from 'styled-components'
import { QuantityPicker } from 'react-qty-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setShoppingList, setTotalPrice } from '../../reducers/purchaseApi'

function ItemOptionSelector({options}) {
    const dispatch = useDispatch();

    const purchaseSheet = useSelector(state => state.purchase.shoppingList)
    const totalPrice = useSelector(state => state.purchase.totalPrice)
    const quantityHandler = (amount, name, price, idx) => {
        const newPurchaseSheet = purchaseSheet.filter(x => x.name !== name);
        if (amount === 0) {
            dispatch(setShoppingList(newPurchaseSheet));
        }
        else {
            let obj = {
                id : idx,
                name : name,
                amount : amount,
                price : price,
            };
            newPurchaseSheet.push(obj);
            dispatch(setShoppingList(newPurchaseSheet));
        }
    }

    useEffect(() => {
        let total = 0;
        purchaseSheet.map((value) => 
            // total += value.price * value.amount
        total += (value.price*value.amount)
        );
       dispatch(setTotalPrice(total))
    }, )


  return (     
    <>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        {options && options.map((opt, idx) => 
            <ItemDetails key={idx}>
                <ItemOptionLabel>
                    {opt.name} ({opt.price})
                </ItemOptionLabel>
                <ItemQtyBox>
                <QuantityPicker min={0} max={5} onChange={(value) => quantityHandler(value, opt.name,opt.price, idx)} ></QuantityPicker>
                </ItemQtyBox>
            </ItemDetails>
            )}
            <Line></Line>
            <ItemDetails>
                <ItemPriceLabel>총 상품 가격</ItemPriceLabel>
                <ItemPriceContent>{totalPrice.toLocaleString()} 원</ItemPriceContent>
            </ItemDetails>
    </Box>
    </>
  )
}

export default ItemOptionSelector

const ItemDetails = styled.div`
    display : block;
    margin-bottom : 30px;
    height : 14px;
    position : relative
`


const ItemOptionLabel = styled.div`
    position : absolute;
    left : 10px;
    font-size: 14px;
    line-height: 50px;
    margin-right: 40px
`

const ItemQtyBox = styled.div`
    position : absolute;
    right : 1px;
`

const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  width: 100%;
`;

const ItemPriceLabel = styled.div`
    position : absolute;
    top : 20px;
    left : 10px;
    font-size: 20px;
    line-height: 36px;
    font-weight : bold;
`
const ItemPriceContent = styled.div`
    position : absolute;
    top : 20px;
    right : 30px;
    font-size: 30px;
    line-height: 36px;
    font-weight: bold;
`