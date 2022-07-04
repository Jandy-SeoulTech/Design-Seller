import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box, TextField, Divider } from '@mui/material'
import { setAddressInfo } from '../../reducers/purchaseApi';

import SearchAddress from './SearchAddress';

function InputDeliveryInfo({props}) {
    const dispatch = useDispatch();
    const addressInfo = useSelector(state => state.purchase.requestData.address);
    const detailHandler = (e) => {
        dispatch(setAddressInfo({...addressInfo, detail : e.currentTarget.value}));
    }
    
    const addressHandler = (street, zipcode) => {
        dispatch(setAddressInfo({
            ...addressInfo,
            street : street,
            zipcode : zipcode
        }))
    }
    

  return (
    <div>
        <StyledH3>배송지</StyledH3>
            <Divider></Divider>
            <Box component="form" sx={{
              display:"grid",
              gap: 1,
              gridTemplateColumns:"repeat(5,1fr)",
              width: 500,
              m: 3}}>
              <Label sx={{gridRow: '1', gridColumn : '1'}}>주소</Label>
              <TextField type='address' disabled sx={{gridRow: '1',gridColumn : '2/5'}} value={addressInfo.street}></TextField>
              {/* 우편번호 검색 모달창 띄우고 request 보내는 걸로 마무리 */}
              <Label sx={{gridRow: '2', gridColumn : '1'}}>우편번호</Label>
              <TextField type='number' disabled sx={{gridRow: '2',gridColumn : '2/6'}} value={addressInfo.zipcode}></TextField>
              <SearchAddress addressHandler={addressHandler}/>
              <Label sx={{gridRow : '3', gridColumn : '1'}}>상세주소</Label>
              <TextField type='text' sx={{gridRow : '3', gridColumn : '2/6'}} onChange={detailHandler}></TextField>
              <Label sx={{gridRow : '4', gridColumn : '1'}}>배송메모</Label>
              <TextField type='text' sx={{gridRow : '4', gridColumn : '2/6'}}></TextField>
            </Box>
    </div>
  )
}

const Label = styled.label`
    font-size : 16px;
    font-weight : bold;
    line-height : 55px;
`

const StyledH3 = styled.h3`
    font-size: 22px;
`


export default InputDeliveryInfo