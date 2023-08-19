import React, { useState,useEffect } from 'react'
import Carduser from './Carduser'
import Productcard from './Productcard'
import { currentVisitor } from '../../logic/getUser'
import axios from 'axios'

const Finaluserprof = () => {
  const {visitor}=currentVisitor();
  const [collector,setCollector]=useState();

  useEffect(()=>{
    const loadContents=async()=>{
        console.log("|||||||||||||||||||||||||||",visitor)
        const getVisitor=await axios.put("http://localhost:8080/collector/myCollector",{id:visitor._id},{withCredentials:true});
        console.log(getVisitor.data.data);
        setCollector(getVisitor.data.data);
    }
    loadContents();
    },[visitor])
  return (
  <div className='py-40'>
    {collector && 
    <><Carduser collector={collector}   />
    <Productcard boughtProducts={collector.boughtProducts}/></>}
  </div>
  )
}

export default Finaluserprof
