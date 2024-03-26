import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./table/TableSlice";


export default configureStore({
    reducer:{
        table:tableReducer,
        
    }
})