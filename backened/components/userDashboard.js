const mongoose=require('mongoose');
const express=require('express');
const { userModel } = require('../models/userModel');
const { visitorModel } = require('../models/visitorsModel');


const router=express.Router();

router.post('/createProfile',async(req,res)=>{
    console.log(req.body);
    const {_id,username}=req.body.user;
    try{
      const createUser=new userModel({_id:_id,username:username,});
      await createUser.save();

      const updateVistor=await visitorModel.findById(_id);
      updateVistor.vistorDesig="User";
      updateVistor.isProfileCreated=true;
      updateVistor.save();
      return res.status(200).json({message:true,data:{createUser,updateVistor}})
    }
    catch(err){
        console.log(err);
        return res.status(404).json({message:false,data:err.message});
    } 
})
router.get('/:username',async(req,res)=>{

    const {id}=req.body;
    try{
      const getUser=await userModel.findById(id);
      console.log(getUser);
      return res.status(200).json({message:true,data:getUser});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:false,data:err.message})
    }
})
router.put('/buyItem',async(req,res)=>{
    const {id,productId}=req.body;
    try{
       const getUser=await userModel.findById(id).populate('boughtProducts');
       getUser.boughtProducts.push(productId);
       await getUser.save();
       console.log(getUser);
       return res.status(200).json({message:true,data:getUser});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:false,data:err.message})
    }
})

module.exports=router;