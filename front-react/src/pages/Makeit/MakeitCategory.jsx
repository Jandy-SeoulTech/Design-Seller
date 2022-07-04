import React, {useEffect} from 'react'
import {Box} from '@mui/material'
import OptionSelector from '../../components/makeitPage/OptionSelector'
import DetailOptionSelector from '../../components/makeitPage/DetailOptionSelector'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemOptions, fetchItemList } from '../../reducers/categoryApi'
import ListIndexPage from '../../components/common/list/ListIndexPage'
import { flushShoppingList } from '../../reducers/purchaseApi'
import { Header } from '../../components/common'

function MakeitCategory(props) {
  const dispatch = useDispatch();
  const listOptions = useSelector((state) => state.category.listfetchOptions);
  const items = useSelector((state) => state.category.itemList);
  
  useEffect(() => {
    if (props.link === "product") {
      dispatch(flushShoppingList());
      dispatch(fetchItemOptions());
      dispatch(fetchItemList(listOptions));
    } else {
      console.log('실행');
      dispatch(flushShoppingList());
      dispatch(fetchItemOptions());
      dispatch(fetchItemList(listOptions));
    }
  }, [dispatch, listOptions, props.link]);
  
  return (
    <div>
      <Header></Header>
        <Box>
            <Box sx={{m: '0 auto', backgroundColor: '#FFE664'}}>
                <OptionSelector ></OptionSelector>
            </Box>
            <br></br>
            <DetailOptionSelector></DetailOptionSelector>
            <br></br>
            <ListIndexPage items={items}></ListIndexPage>
        </Box>
        <br></br>
        {/* <DetailOptionSelector label="종류"></DetailOptionSelector>
        <br></br> */}
        {/* {props.link === "product" ? (
          <ListIndexPage items={items}></ListIndexPage>
        ) : (
          <ListIndexPage items={items}></ListIndexPage>
        )} */}
    </div>
  )
}

export default MakeitCategory;
