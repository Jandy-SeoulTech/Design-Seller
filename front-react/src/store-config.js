import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/user"
import categorySlice from "./reducers/categoryApi"
import productSlice from "./reducers/productApi"
import purchaseSlice from "./reducers/purchaseApi"

//적용에 무리 공식문서 뒤지는 중
// const persistConfig = {
//     key: "root",
//     storage : storage,
// }


export default configureStore({
    reducer: {
        user: userReducer,
        category: categorySlice.reducer,
        prd: productSlice.reducer,
        purchase: purchaseSlice.reducer,
    },
    
})
