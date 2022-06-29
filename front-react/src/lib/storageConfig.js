import { combineReducers, configureStore, compose } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";

import userSlice from "./userApi";
import productSlice from "./productApi";
import { history } from "../reducers/history";

console.log(history.location);
const rootReducer = combineReducers({
  user: userSlice.reducer,
  prd: productSlice.reducer,
});

//루트 리듀서와 미들웨어를 엮어 스토어 생성
let store = (initialStore) =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(routerMiddleware(history)),
    // devTools: process.env.NODE_ENV !== "production",
  });

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: true,
// });
export default store;
