import React from 'react'
import {useForm } from 'react-hook-form'
import apiSlice from '../store/apiSlice'
import List from './List'

export default function Form() {
    const  {register,handleSubmit,resetFeild }=useForm()
    const [addTransastion]=apiSlice.useAddTransactionMutation()
    const onSubmit=async(data)=>{
        if(!data) return {}
        await addTransastion(data).unwrap()
        resetFeild('name')
        resetFeild('amount')
    }
  return (
    <div className='form max-w-sm mx-auto w-96'>

        <h1 className="font-bold pb-4">Transactions</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder='Salary,House,Rent' className='form-input'/>
                </div>
                <select name="" id="" className="form-input"  {...register('type')}>
                    <option value="investment" defaultValue >Investment</option>
                    <option value="expense">Expense</option>
                    <option value="saving">Saving</option>
                    <option value="cash">Cash</option>

                </select>

                <div className="input-group">
                <input type="text" placeholder='Amount' className='form-input'  {...register('amount')}/>
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'> Add</button>
                </div>
            </div>
        </form>
        <List/>
    </div>
  )
}
