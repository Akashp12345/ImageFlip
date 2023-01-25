import { configureStore } from "@reduxjs/toolkit";
import ImageSlice from "./Reducer"
const Store=configureStore({
    reducer:{
        Data:ImageSlice
    }
})
export default Store