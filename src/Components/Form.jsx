import React from 'react'

export default function Form() {
  return (
    <div className='form max-w-sm mx-auto w-96'>

        <h1 className="font-bold pb-4">Transactions</h1>
        <form id='form' action="">
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" placeholder='Salary,House,Rent' className='form-input'/>
                </div>
                <select name="" id="" className="form-input">
                    <option value="investment" defaultValue >Investment</option>
                    <option value="expense">Expense</option>
                    <option value="saving">Saving</option>
                    <option value="cash">Cash</option>

                </select>

                <div className="input-group">
                <input type="text" placeholder='Amount' className='form-input'/>
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'> Add</button>
                </div>
            </div>
        </form>
    </div>
  )
}
