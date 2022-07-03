import React, { useEffect } from "react";
import { Box } from "@mui/material";
import OptionSelector from "../../components/makeitPage/OptionSelector";
import DetailOptionSelector from "../../components/makeitPage/DetailOptionSelector";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemOptions, fetchItemList } from "../../reducers/categoryApi";
import ListIndexPage from "../../components/common/list/ListIndexPage";
import { flushShoppingList } from "../../reducers/purchaseApi";

function MakeitCategory(props) {
  const dispatch = useDispatch();
  const listOptions = useSelector((state) => state.category.listfetchOptions);
  const items = useSelector((state) => state.category.itemList);
  console.log(props);
  useEffect(() => {
    if (props.link === "product") {
      dispatch(fetchItemOptions());
      dispatch(fetchItemList(listOptions));
      dispatch(flushShoppingList());
    } else {
      dispatch(fetchItemOptions());
      dispatch(fetchItemList(listOptions));
      dispatch(flushShoppingList());
    }
  });

  return (
    <div>
      <Box>
        <Box sx={{ m: "0 auto", backgroundColor: "#FFE664" }}>
          <OptionSelector></OptionSelector>
        </Box>
        <br></br>
        <DetailOptionSelector label="종류"></DetailOptionSelector>
        <br></br>
        {props.link === "product" ? (
          <ListIndexPage items={items}></ListIndexPage>
        ) : (
          <ListIndexPage items={items}></ListIndexPage>
        )}
      </Box>
    </div>
  );
}

export default MakeitCategory;
