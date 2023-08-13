import React from 'react';
import Product from './Product'

const Marketplace = () => {
  const array=[1,2,3,4,5,6,7,8]

  return (
    <div className="py-40 primary-container w-full ">

      <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>

       {array.map((obj,id)=>(
         <Product/>
       ))}

      </div>
      <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>

       {array.map((obj,id)=>(
         <Product/>
       ))}

      </div>

    </div>
  )
}

export default Marketplace