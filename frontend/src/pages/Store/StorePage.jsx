import React,{useEffect,useState} from 'react'
import StoreWaste from './StoreWaste'
import Cardboard from '../../3D_componet/Cardboard_box'
import Glass from '../../3D_componet/Glass_bottle'
import MetalSheet from '../../3D_componet/Metal_sheet'
import Electronics from '../../3D_componet/Music_tape'
import Plastic from '../../3D_componet/Hospital_bin'
import Leather from '../../3D_componet/Ld_shoe_men_2'
import axios from 'axios';



const index = () => {
  const [wasteContent,setWasteContent]=useState();
 
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
  useEffect(()=>{
    const loadContents=async()=>{
        const contents=await axios.get('http://localhost:8080/wasteStore/wastes');
        setWasteContent(contents.data.data);
    }
    loadContents();
  },[])
  return (
    <div className='py-40  secondary-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center'>
       {wasteContent && 
        wasteContent.map((obj,id)=>{
          return(
            <StoreWaste model={recycleWaste[id].model} id={id} content={obj} />
          )
        })
       }
    </div>
  )
}

export default index