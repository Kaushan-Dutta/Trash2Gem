import React from 'react'
import { ImCross } from 'react-icons/im';
import { currentVisitor } from '../logic/getUser';
import axios from 'axios';

const AddItem = ({setAddItem}) => {
  const {visitor}=currentVisitor();
  const addItem=async()=>{
    
  }
  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <div className='w-[80vw] h-[70vh] bg-slate-300 rounded-md p-10'>
            <div className='flex flex-row justify-end'>
                <ImCross onClick={()=>setAddItem(false)}/>
            </div>
            <div className=''>
                <div className=''>
                  <label><b>Select the sort of item you want to sell:</b></label>
                   <select className='w-full rounded-md py-2 px-5 font-mono text-xl my-3'>
                      <option value="Plastic Items">Plastic Items</option>
                      <option value="Glass Item">Glass Item</option>

                      <option value="Electronics Item">Electronics Item</option>

                      <option value="Paper Items">Paper Items</option>

                      <option value="Wood Products">Wood Products</option>
                      <option value="Metals">Metal Scraps</option>

                   </select>
                </div>
                <div className=''>
                   <label><b>Enter the amount you want to sell:</b></label>
                   <input type='number' placeholder="Enter the amount" className='w-full rounded-md py-2 px-5 my-3'/>
                </div>
                <div className=''>
                  <button className='bg-primary rounded-md text-white px-5 py-2 text-lg w-[200px]' onClick={addItem}>Add Item</button>
                </div>
            </div>
           

        </div>
    </div>
  )
}

export default AddItem