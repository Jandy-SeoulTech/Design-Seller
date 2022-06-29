import { Box, Container } from '@mui/material'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectSubCate } from '../../reducers/categoryApi';

function DetailOptionSelector() {
    const dispatch = useDispatch();
    const selectedOptions = useSelector((state) => state.category.selected);
    const subCate = selectedOptions.subcategory ?? [];


    const optionClickHandler = (cateID) => {
        console.log(cateID)
        dispatch(selectSubCate(cateID))
    }

  return (
    <div>
        <Container sx={{border : 'solid 1.5px black', height: '100px', p: 4, mt : 4}}>
            <Box display="grid" gridTemplateColumns="repeat(6,1fr)" gap={2}>
                <Label>소분류</Label>
                {subCate.map((option, index) => 
                <div key={index}>
                  <Box sx={{
                    justifyContent: "center"
                    }}>
                    <Option onClick={() => optionClickHandler(option.id)}>
                        {option.name}
                    </Option>
                    </Box>  
                </div>
                )}
            </Box>
        </Container>
    </div>
  )
}

// 선택된 option 당 css 추가가 안됨. 
const Option = styled.div`
    text-align : center;
    align-items : center;
    font-weight : bold;
    &: hover {
        background-color: orange;
    }
`

const Label = styled.div`
    text-align : center;
    align-items : center;
    border-right : solid 2px black;
`

export default DetailOptionSelector