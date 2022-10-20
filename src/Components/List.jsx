import React from 'react'
import "boxicons"

import apiSlice from '../store/apiSlice'

export default function List() {
  
  const{ data,isFetching,isError,isSuccess } = apiSlice.useGetlabelQuery()
  const[deleteTransaction]=apiSlice.useDeleteTransactionMutation()
  
  const handlerClick=(e)=>{
    if(!e.target.dataset.id) return 0;
    deleteTransaction({_id:e.target.dataset.id})
    
 }
  let Transaction;
  
  if (isFetching){
    Transaction="Loading"
  }
  else if(isSuccess){
  
   Transaction=data.map((v,i)=><Transactions handler={handlerClick} key={v.id} category={v}/>)
  }
  else if (isError){
  Transaction="<h3>Error</h3>"
  }
 

  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 text-xl font-bold'>History</h1>
          {Transaction}
          
    </div>
  )
}

export function Transactions({category,handler}){
    if(!category) return null
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color?? 'red'}`}}>
            <button  onClick={handler} className='px-3'><box-icon data-id={category._id ?? "sa"} type='trash'></box-icon></button>
            <span className='block w-full bg-gray-50'>{category.type}</span>
        </div>
    )
}