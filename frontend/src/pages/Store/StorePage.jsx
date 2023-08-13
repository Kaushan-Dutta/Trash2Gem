import React from 'react'
import StoreWaste from './StoreWaste'



const index = () => {
  const array=[12,3,4,5,6,7,8,9]
  const recycleWaste=[
    {
      id:1,
      name:"Plastics"
    },
    {
      id:2,
      name:"Glasses"
    },{
      id:3,
      name:"Metals"
    },{
      id:4,
      name:"Paper"
    },{
      id:5,
      name:"Cans"
    },{
      id:6,
      name:"Electronics"
    }
  ]
  return (
    <div className='py-40  secondary-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center'>
       {
        recycleWaste.map((obj,id)=>{
          return(
            <StoreWaste text={obj.name} id={id}/>
          )
        })
       }
    </div>
  )
}

export default index