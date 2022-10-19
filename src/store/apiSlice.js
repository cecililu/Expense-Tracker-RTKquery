import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



const baseURI='http://localhost:3000'

 export const apiSlice=createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder=>(
            {
                getCategories:builder.query({
                    query:()=>'/api/v1/category' 
                }),

                getlabel:builder.query({
                    query:()=>'/api/v1/labels' 
                }),
                addTransaction:builder.mutation({
                    query:(initialTransaction)=>({
                        url:'/api/v1/transaction',
                        method:"POST",
                        body:initialTransaction
                    }) 
                }),

                deleteTransaction:builder.mutation({
                    query:(id)=>({
                        url:'/api/v1/transaction',
                        method:"DELETE",
                        body:id
                    }) 
                }),


            })
        
})
export default apiSlice