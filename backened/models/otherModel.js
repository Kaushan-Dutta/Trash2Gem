const mongoose = require('mongoose');

require('../connectServer');

const nftSchema=new mongoose.Schema({
    _id:{type:Number,required:true},
    ipfs:{type:String,required:true},
    rewardedFor:{type:String,required:true}
});
const productSchema=new mongoose.Schema({
    _id:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String,require:true}
});
const nftModel=new mongoose.model('NftModel',nftSchema);
const productModel=new mongoose.model('ProductModel',productSchema);

module.exports={
    nftSchema,productSchema,nftModel,productModel
};