import React,{useEffect,useState} from "react";
import { currentVisitor } from "../../logic/getUser";
import ProductCarousel from './ProductCarousel';
import ProfileCard from './Profile';
import Card from './Card';
import Useful from './Useful';
import axios from 'axios';

function Finalpage(){

    const {visitor}=currentVisitor();
    const [community,setCommunity]=useState();

    useEffect(()=>{
        const loadContents=async()=>{
            console.log("|||||||||||||||||||||||||||",visitor)
            const getVisitor=await axios.post("http://localhost:8080/community/myCommunity",{id:visitor._id},{withCredentials:true});
            console.log(getVisitor.data.data);
            setCommunity(getVisitor.data.data);
        }
        loadContents();
    },[visitor])
    return(

        
        <div className="py-20">
            {community && 
              <><ProfileCard image={community.image} name={community.communityName} descrip={community.description}  />
              <Useful/><Card card={community.products}/></>}
        </div>
    )}
export default Finalpage;