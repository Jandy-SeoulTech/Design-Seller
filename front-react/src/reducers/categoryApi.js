import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "./APIconfig";
import axios from "axios";

const initialStateValue = {
  allCategories: [],
  selected: {},
  itemList: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  listfetchOptions: {
    categoryId: 35,
    size: 10, //한번 검색될 때 가져오는 데이터 수
    page: 1, //검색 페이지,
    sort: "createDate,ASC", //정렬기준 , view|like|createDate,ASC|DESC
  },
  itemId: 0,
  itemInfo: {},
};

export const fetchItemOptions = createAsyncThunk(
  "category/GET_CATE",
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data.data;
    } catch (e) {
      return e.message;
    }
  }
);

export const fetchItemDetail = createAsyncThunk(
  "makeit/GET_DETAIL_ITEM",
  async (itemId) => {
    try {
      const response = await axios.get(API_BASE_URL + `/production/${itemId}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchItemList = createAsyncThunk(
  "makeit/GET_ITEM",
  async ({ categoryId, size, page, sort }) => {
    try {
      const response = await axios.get(API_BASE_URL + `/production/list`, {
        params: {
          categoryId: 22, //현재 서버에서 지원하는 Id만 가능,
          page: page,
          size: size,
          sort: sort,
        },
      });
      return response.data.data;
    } catch (err) {
      return err.message;
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: initialStateValue,
  reducers: {
    //makeIt 인지, market인지
    setLocation: (state, action) => {
      state.value = action.payload;
    },
    //아이템 조회 카테고리 선택
    selectCate: (state, action) => {
      state.selected = action.payload;
    },
    //조회되는 페이지 set
    setListPage: (state, action) => {
      state.listfetchOptions.page = Number(action.payload);
    },
    //아이템 세부정보 불러오는 id
    clickItem: (state, action) => {
      state.itemId = Number(action.payload);
    },
    //세부 카테고리 선택
    selectSubCate: (state, action) => {
      state.listfetchOptions.categoryId = Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemOptions.fulfilled, (state, action) => {
        state.allCategories = action.payload;
        // state.selected = action.payload[0];
      })
      .addCase(fetchItemList.fulfilled, (state, action) => {
        state.itemList = action.payload;
      })
      .addCase(fetchItemDetail.fulfilled, (state, action) => {
        state.itemInfo = action.payload;
      });
  },
});

export default categorySlice;

export const {
  setLocation,
  selectCate,
  setListPage,
  clickItem,
  selectSubCate,
} = categorySlice.actions;
