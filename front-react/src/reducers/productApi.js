import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import product_list from "../assets/json/product_list";

// //!!!!!!aws 정보 입력해야함!!!
const API_BASE_URL = "http://13.124.100.213:8080/api/v1";

const initialState = {
  list: product_list,
  productInfo: [
    {
      id: 0,
      name: "아이폰 하드 케이스",
      image_list: [],
      price: 20.0,
      market: "짐승친구들",
      reg_date: "",
      category: "아이폰",
      option_list: ["블랙", "화이트"],
      thumbnail_image:
        "https://image1.marpple.co/files/u_1889845/2022/5/original/7cc1043fe80934a258563d769bc99345decaea7c1.png?q=92&w=432&f=jpeg&bg=f6f6f6",
      info: " 얇고 가벼운 폴리카보네이트 소재의 하드케이스입니다. 충격에 강하고 부드러운 그립감을 갖습니다. 화려하고 선명한 컬러 표현이 가능하며 긁힘과 색바램에 강합니다.   소재 : 폴리카보네이트 제조국 : Made in Korea   주의사항  모델컷의 경우 촬영장소의 환경에 따라 실제 색상과 상이할 수 있습니다. 오염 시 수건에 미지근한 물을 적셔 오염 부분을 닦아 주시기 바랍니다. 케이스 교체 시에 무리한 힘을 가하지 마십시오. 내구성이 우수하지만, 고열에서의 장시간 노출 시에는 변형이 올 수 있습니다. 카드수납은 불가능합니다.  ",

      description: "설명",
    },
  ],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  prdDetail: null,
};

// //상품 리스트 get
export const getAllPrdDB = createAsyncThunk("product/SET_PRD", async () => {
  try {
    const response = await axios.get(API_BASE_URL + "/product");

    return [...response.data];
  } catch (err) {
    return err.message;
  }
});
// export const getCatPrdDB = createAsyncThunk(
//   "product/GET_PRD",
//   async (category) => {
//     try {
//       const response = await axios.get(API_BASE_URL + `/product/${category}`);
//       return [...response.data];
//     } catch (err) {
//       return err.message;
//     }
//   }
// );
export const getPrdDetailDB = createAsyncThunk(
  "product/GET_DETAIL_PRD",
  async (id) => {
    try {
      const response = await axios.get(API_BASE_URL + `/product/${id}`);
      localStorage.setItem("productInfo", JSON.stringify(response.data));

      return response.data[0];
    } catch (err) {
      return err.message;
    }
  }
);

export const createPrdDB = createAsyncThunk(
  "product/CREATE_PRD",
  async (prdData) => {
    try {
      const response = await axios.post(
        API_BASE_URL + `/product/create`,
        JSON.stringify(prdData)
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updatePrdDB = createAsyncThunk(
  "product/UPDATE_PRD",
  async ({ id, prdData }) => {
    try {
      const response = await axios.put(
        API_BASE_URL + `/product/${id}`,
        JSON.stringify(prdData)
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deletePrdDB = createAsyncThunk(
  "product/DELETE_PRD",
  async (id) => {
    try {
      const response = await axios.delete(API_BASE_URL + `/product/${id}`);
      return response.data.id;
    } catch (err) {
      return err.message;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setPrd: (state, action) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPrdDB.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createPrdDB.fulfilled, (state, action) => {
        action.payload.id = Number(action.payload.id);
        state.list.push(action.payload);
      })
      .addCase(updatePrdDB.fulfilled, (state, action) => {
        return state.map((list) => {
          if (list.id === action.payload.id) {
            return { ...list, prdData: action.payload.prdData };
          } else {
            return list;
          }
        });
      })
      .addCase(deletePrdDB.fulfilled, (state, action) => {
        state.filter((list) => list.id !== action.payload.id);
      });
  },
});

export default productSlice;
