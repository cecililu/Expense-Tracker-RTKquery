import {configureStore, MiddlewareArray} from "@reduxjs/toolkit"
import apiSlice from "./apiSlice"
import { expenseSlice } from "./reducer"


export const store = configureStore({
      reducer:{
        expense:expenseSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    } ,
    middleware:getDefaultMiddleWare=getDefaultMiddleWare().concate(apiSlice.middleware) 
})