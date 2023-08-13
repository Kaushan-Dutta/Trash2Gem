import React from "react";

import ProductCarousel from './ProductCarousel';
import ProfileCard from './Profile';
import Card from './Card';
import Useful from './Useful';
function Finalpage(){
    return(
        <div className="py-20">
       
    <ProfileCard/>
    <Useful/>
     <Card/>
   
   
    </div>
    )
}
export default Finalpage;