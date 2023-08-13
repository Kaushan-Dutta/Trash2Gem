const mongoose=require('mongoose');
const express=require('express');
const { communityModel } = require('../models/communityModel');
const { visitorModel } = require('../models/visitorsModel');
const { productModel } = require('../models/otherModel');

const router=express.Router();

router.post('/createCommunity',async(req,res)=>{
    console.log(req.body)
    const {_id,communityName,description,latitude,longitude,image}=req.body;

    try{
      const createCommunity=new communityModel({_id,communityName,description,location:{latitude:latitude,longitude:longitude},image:image});
      await createCommunity.save();
      const updateVistor=await visitorModel.findById(_id);
      updateVistor.vistorDesig="Community";
      updateVistor.isProfileCreated=true;
      updateVistor.save();
      return res.status(200).json({message:true,data:{createCommunity,updateVistor}})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.get('/:communityname',async(req,res)=>{
    try{
      const getCommunity=await communityModel.findById(req.body.id).populate('products');
      console.log(getCommunity);
      return res.status(200).json({message:true,data:getCommunity});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.get('/communities',async(req,res)=>{
    try{
      const getCommunity=await communityModel.find();
      console.log(getCommunity);
      return res.status(200).json({message:true,data:communities});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.put('/createProduct',async(req,res)=>{
    console.log(req.body);
    const {_id,description,image,communityId}=req.body;
    try{
     const createProduct=new productModel({_id,description,image});
     await createProduct.save();
     const updateCommunity=await communityModel.findById(communityId);
     updateCommunity.products.push(_id);
     await updateCommunity.save();
     return res.status(200).json({message:true,data:createProduct});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})

module.exports=router;