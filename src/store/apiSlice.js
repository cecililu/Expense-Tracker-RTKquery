import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



const baseURI='http://localhost:3000/'

 export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({ baseUrl:baseURI}),
        endpoints: builder=>(
            {
                getCategories:builder.query({
                    query:()=>'api/v1/category' 
                })
            }),
})
export default apiSlice