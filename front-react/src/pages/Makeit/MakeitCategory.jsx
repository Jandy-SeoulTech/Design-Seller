import React, {useEffect} from 'react'

import {Box} from '@mui/material'
import OptionSelector from '../../components/makeitPage/OptionSelector'
import DetailOptionSelector from '../../components/makeitPage/DetailOptionSelector'
import { useDispatch } from 'react-redux'
import { fetchItemOptions } from '../../reducers/categoryApi'

function MakeitCategory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemOptions());
  }, [])
  
  return (
    <div>
        <Box>
            <Box sx={{m: '0 auto', backgroundColor: '#FFE664'}}>
                <OptionSelector ></OptionSelector>
            </Box>
            <br></br>
            <DetailOptionSelector label="종류"></DetailOptionSelector>
        </Box>
    </div>
  )
}

export default MakeitCategory