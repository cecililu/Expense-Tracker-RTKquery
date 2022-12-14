import { Chart ,ArcElement} from 'chart.js';
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { chart,getTotal } from '../helper/helper';
import apiSlice from '../store/apiSlice';
import Label from './Label';

Chart.register(ArcElement)  
export default function Graph() {
 
  const{data,isFetching,isError,isSuccess} = apiSlice.useGetlabelQuery()
  
  let graphData;
  let total
  if (isFetching){
    graphData="Loading..."
  }
  else if(isSuccess){
    
  graphData = <Doughnut {...chart(data)}/> 
  total=getTotal(data)
  }
  else if (isError){
    graphData="Error! could not get Transactiions"
  }

  return (
    <div className='flex justify-content max-w-xs mx-auto'>
       <div className="item">
            <div className="chart relative m-6">
              
                {graphData}
                  
                <h3 className="mb-4 title ">
                  <span className='mx-4'>Total</span>
                <span className='block text-3xl text-emerald-400 '>{total}</span>
                </h3>
                
            </div>
            <div className="flex flex-col py-10 gap-4">
                <Label/>
            </div>
        </div> 
    </div>
  )
}
 