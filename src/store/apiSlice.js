import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



const baseURI='http://localhost:3000'

 export const apiSlice=createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI, mode: "cors"}),
    endpoints: builder=>(
            {
                getCategories:builder.query({
                    query:()=>'/api/v1/category',
                    providesTags:['categories'] 
                }),

                getlabel:builder.query({
                    query:()=>'/api/v1/labels' ,
                    providesTags:["transcations"] 
                }),
                addTransaction: builder.mutation({
                    query:(initialTransaction)=>({
                        url:'/api/v1/transaction',
                        method:"POST",
                        body:initialTransaction
                    }),
                    invalidatesTags:["transactions"],
                }),

                deleteTransaction:builder.mutation({
                    query:(id)=>({
                        url:'/api/v1/transaction',
                        method:"DELETE",
                        body:id
                    }) ,
                    invalidatesTags:["transactions"],
                }),


            })
        
})
export default apiSlice