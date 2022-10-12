import React from 'react'

const obj=[
  {
  type:"Savings",
  color: "red",
  percentage:50,
  },
 {
  type:"Expense",
  color: "blue",
  percentage:25,

 },
 {
   type:"Loan",
   color: "yellow",
  percentage:"25", 
 }
]


export default function Label() {
  
  return (
    <>{
    obj.map((item)=><LabelComponent type={item.type} color={item.color} percentage={item.percentage}/>)
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