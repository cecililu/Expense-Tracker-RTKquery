import React from 'react'
import 'boxicons'
const obj=[
    {
    type:"Savings",
    color: "red",
  
    },
   {
    type:"Expense",
    color: "blue",
    
  
   },
   {
     type:"Loan",
     color: "yellow",
     
   }
  ]
  
export default function List() {
    
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 text-xl font-bold'>History</h1>
       {obj.map((data)=>{
        return (<Transactions category={data}/>)
       })
       } 
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