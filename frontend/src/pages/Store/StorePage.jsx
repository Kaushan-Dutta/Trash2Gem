import React from 'react'
import StoreWaste from './StoreWaste'

const index = () => {
  const array=[12,3,4,5,6,7,8,9]
  return (
    <div className='py-40  secondary-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center'>
       {
        array.map((onj,id)=>{
          return(
            <StoreWaste/>
          )
        })
       }
    </div>
  )
}

export default index