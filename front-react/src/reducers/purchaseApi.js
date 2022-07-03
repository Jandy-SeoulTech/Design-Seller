import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
import {API_BASE_URL} from "./APIconfig";

const initialStateValue = {
    shoppingList: [],
    totalPrice: 0,
    requestData : {
        address : {
            detail : "",
            street : "",
            zipcode : "",
        },
        options : [
            // {count : 0,
            // productionOptionId: 0}
        ],
        productionId : 0,
        requestFiles : [
            
        ],
        requester : {
            email : "",
            name : "",
            phone : "",
        }
    },
    requestState : "incompleted", // | completed
    purchaseState: "incompleted", // | completedW
    fileUploadState : "incompleted" // | completed
}


//제작 요청 의뢰
export const postRequestNew = createAsyncThunk("purchase/SEND_REQUEST", async (formData, access_token) => {
    try {
        const response = await axios({
            method : "post",
            url: API_BASE_URL + "/request/new",
            data : formData,
            headers : {"Content-Type": "multipart/form-data", Authorization: access_token }
        })
        return response.data;
    } catch (err) {
        return err.message;
    }
}) 

const purchaseSlice = createSlice({
    name : "purchase",
    initialState: initialStateValue,
    reducers: {
        setShoppingList : (state, action) => {
            state.shoppingList = action.payload;
        },
        setTotalPrice : (state, action) => {
            state.totalPrice = action.payload;
        },
        flushShoppingList : (state, action) => {
            Object.assign(state, initialStateValue);
        },
        setFileStoragePath : (state, action) => {
            state.requestData.requestFiles = action.payload.filepath;
            state.fileUploadState = action.payload.state;
        },
        setRequesterInfo : (state, action) => {
            state.requestData.requester = action.payload;
        },
        setAddressInfo : (state, action) => {
            state.requestData.address = action.payload;
        },
        setRequestItems : (state, action) => {
            state.requestData.productionId = action.payload.prodId;
            state.requestData.options = action.payload.shoppingList;
        }
    }
})

export default purchaseSlice;
export const {setShoppingList, setTotalPrice, flushShoppingList, setFileStoragePath,setRequesterInfo, setAddressInfo, setRequestItems} = purchaseSlice.actions;