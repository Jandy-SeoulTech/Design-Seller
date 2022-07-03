import React, { useEffect } from "react";
import ItemSummary from "../../components/makeitPage/ItemSummary";
import { Header } from "../../components/common";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemDetail } from "../../reducers/categoryApi";
import { Box, Container } from "@mui/material";
import ItemDescription from "../../components/makeitPage/ItemDescription";

function MakeitDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemInfo = useSelector((state) => state.category.itemInfo);

  useEffect(() => {
    dispatch(fetchItemDetail(id));
  }, [dispatch, id]);

  console.log(id);
  console.log(itemInfo);
  return (
    <div>
      <Header></Header>
      <Box>
        <Container sx={{ mb: 10 }}>
          <ItemSummary itemInfo={itemInfo}></ItemSummary>
        </Container>
        <ItemDescription />
      </Box>
    </div>
  );
}

export default MakeitDetail;
