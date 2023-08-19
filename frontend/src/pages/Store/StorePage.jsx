import React from 'react'
import StoreWaste from './StoreWaste'
import Cardboard from '../../3D_componet/Cardboard_box'
import Glass from '../../3D_componet/Glass_bottle'
import MetalSheet from '../../3D_componet/Metal_sheet'
import Electronics from '../../3D_componet/Music_tape'
import Plastic from '../../3D_componet/Hospital_bin'
import Leather from '../../3D_componet/Ld_shoe_men_2'


const index = () => {
  const recycleWaste=[
    {
      model:<Cardboard/>
    },
    {
      model:<Glass/>
    },
    {
      model:<MetalSheet/>
    },
    {
      model:<Electronics/>
    },
    {
      model:<Plastic/>
    },
    {
      model:<Leather/>
    }
    
  ]
  return (
    <div className='py-40  secondary-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center'>
       {
        recycleWaste.map((obj,id)=>{
          return(
            <StoreWaste model={obj.model} id={id}/>
          )
        })
       }
    </div>
  )
}

export default index