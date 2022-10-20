import React from 'react'
import { getLabels, getSum } from '../helper/helper';
import apiSlice from '../store/apiSlice'



export default function Label() {
  
  const{data,isFetching,isError,isSuccess} = apiSlice.useGetlabelQuery()
  
  let Transactions;
  if (isFetching){
    Transactions="Loading..."
  }
  else if(isSuccess){
   Transactions=getLabels(data).map((item)=><LabelComponent key={item.id} type={item.type} color={item.color} percentage={item.percentage}/>)
  }
  else if (isError){
 Transactions="Error! could not get Transactiions"
  }
  return (
    <>{Transactions
  }
  </>
  )
}

function LabelComponent({type,color,percentage}){
  return(
  <div className='labels flex justify-between'>
    <div className="flex gap-3">
      <div className='w-2 h-2 rounded py-3' style={{ background:color }}></div>
    <h3 className='text-md'>{type}</h3>
    </div>
    <h3 className='font-bold'>{percentage}</h3>

  </div>

  )
 }