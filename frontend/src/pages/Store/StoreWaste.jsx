import React, { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import BuyWaste from '../../PopupEvents/BuyWaste';

const StoreWaste = () => {
  const [buyWaste,setBuyWaste]=useState(false);

  return (
    <div className='w-[200px] h-[200px] p-5  group  border-2 border-solid  shadow-md bg-slate-300 transition-all  my-5'>
          <div className='h-full flex flex-col justify-center items-center group-hover:opacity-0 transition-all'>
              <FaBeer className='text-5xl '/>
              <p className='font-mons text-xl my-5'>Plastic Bags</p>
          </div>
          <div className='h-full opacity-0 group-hover:opacity-100 relative -translate-y-36 text-center grid grid-cols-1 gap-1 transition-all'>
              <p><b className='text-primary'>230kg</b></p>
              <label className='font-preah'>Amount Received</label>
              <p><b className='text-primary'>13kg</b></p>
              <label className='font-preah'>Amount Sold</label>
              <button className='w-full rounded-sm px-2 py-1 font-mons text-white bg-primary' onClick={()=>setBuyWaste(true)}>Buy Now</button>
          </div>
  {buyWaste && <BuyWaste setBuyWaste={setBuyWaste}/>}
    </div>
  )
}

export default StoreWaste