import { Chart ,ArcElement} from 'chart.js';
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Label from './Label';

Chart.register(ArcElement)

  
  
const config={
  data:{
    datasets:[
        {

          data: [133,333,111],
          backgroundColor:['red','blue','yellow'],
          hoverOffset:4,
          borderRadius:30,
          spacing:15
        }]
    } ,
    options:{
       cutout:225,
       plugins: {
        legend: {
          position: 'top',
        },}
    } 
}

export default function Graph() {
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
       <div className="item">
            <div className="chart relative">
            <Doughnut {...config}/>
                <h3 className="mb-4 font-bold title">Total</h3>
                 <span className='block text-3xl text-emerald-400 '>$4000</span>
            </div>
            <div className="flex flex-col py-10 gap-4">
                <Label/>
            </div>
        </div> 
    </div>
  )
}
 