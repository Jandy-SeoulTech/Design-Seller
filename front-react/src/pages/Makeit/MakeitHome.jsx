import { Box } from '@mui/system'
import { Divider, Container } from '@mui/material'
import React from 'react'
import Banner from '../../components/mainPage/Banner'
import ListCircle1x5 from '../../components/common/list/ListCircle1x5'
import ListSquare1x5 from '../../components/common/list/ListSquare1x5'
import ListSquare1x4 from '../../components/common/list/ListSquare1x4'
import Header from '../../components/common/Header'
import SearchBox from '../../components/common/SearchBox'

function MakeitHome() {
  const headers = ["카테고리", "이번주 가장 인기 많은 제품!", "이 제품 어때요?"];
  return (
    <div>
      <Header/>
      <Banner/>
      <Container sx={{alignItems: 'center'}}>
        <Box maxWidth="lg" minWidth="sm">
            <SearchBox/>
              <ListCircle1x5 header={headers[0]}></ListCircle1x5>
              <Divider></Divider>
              <ListSquare1x4 header={headers[1]}></ListSquare1x4>
              <Divider></Divider>
              <ListSquare1x5 header={headers[2]}></ListSquare1x5>
        </Box>
      </Container>
    </div>
  )
}

export default MakeitHome