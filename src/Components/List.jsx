import React from 'react'
import 'boxicons'

import {default as api} from '../store/apiSlice'

export default function List() {
  
  const{ data,isFetching,isError,isSuccess } = api.useGetlabelQuery()
  
  let Transactions;
  if (isFetching){
    Transactions="Loading..."
  }
  else if(isSuccess){
   Transactions= data.map((v,i)=><Transactions key={v.id} category={v}/>)
  }
  else if (isError){
  Transactions="Error! could not get Transactiions"
  }


  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 text-xl font-bold'>History</h1>
          {Transactions} 
    </div>
  )
}

function Transactions({category}){
    if(!category) return null
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color?? 'red'}`}}>
            <button className='px-3'><box-icon size='15px'name='trash' color={category.color?? 'red'}/></button>
            <span className='block w-full bg-gray-50'>{category.type}</span>
        </div>
    )
}