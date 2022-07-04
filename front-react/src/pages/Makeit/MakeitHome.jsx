import { Box } from "@mui/system";
import { Divider, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "../../components/mainPage/Banner";
import ListCircle1x5 from "../../components/common/list/ListCircle1x5";
import ListSquare from "../../components/common/list/ListSquare";
import Header from "../../components/common/Header";
import SearchBox from "../../components/common/SearchBox";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemOptions, selectCate } from "../../reducers/categoryApi";
import axios from "axios";
import { API_BASE_URL } from "../../reducers/APIconfig";

function MakeitHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = [
    "카테고리", 
    "이번주 가장 인기 많은 제품!", 
    "이 제품 어때요?"
  ];
  const allCategories = useSelector((state) => state.category.allCategories);
  const [mainItems, setmainItems] = useState({})
  
  const fetchItemsbyTag = async() => {
    const hotItems = await axios.get(API_BASE_URL + '/production/list', {
      params : {
        categoryId: 35, //현재 서버에서 지원하는 Id만 가능,
        page: 1,
        size: 4,
        sort: "createDate,ASC",
      }
    })
    const recommendItems = await axios.get(API_BASE_URL + '/production/list', {
      params : {
        categoryId: 22, //현재 서버에서 지원하는 Id만 가능,
        page: 1,
        size: 5,
        sort: "createDate,ASC",
      }
    })
    setmainItems({hotItems : hotItems.data.data, recommendItems : recommendItems.data.data});
  }


  const onClickHandler = (e) => {
    dispatch(selectCate(allCategories[e.id - 1]));
    navigate("/makeit/category", { selected: e.id });
  };


   useEffect(() => {
    dispatch(fetchItemOptions());
  }, [dispatch]);

  useEffect(() => {
    fetchItemsbyTag();
  }, [])

  useEffect(() => {
    console.log(mainItems)
  }, [mainItems])

  return (
    <div>
      <Header />
      <Banner />
      <Container sx={{ alignItems: "center" }}>
        <Box maxWidth="lg" minWidth="sm">
            <SearchBox/>
              <ListCircle1x5 header={headers[0]} onClickHandler={onClickHandler}></ListCircle1x5>
              <Divider></Divider>
              <ListSquare header={headers[1]} link="makeit" column={3} items={mainItems.hotItems}></ListSquare>
              <Divider></Divider>
              <ListSquare header={headers[2]} link="makeit" column={5} items={mainItems.recommendItems} ></ListSquare>
        </Box>
      </Container>
    </div>
  );
}

export default MakeitHome;
