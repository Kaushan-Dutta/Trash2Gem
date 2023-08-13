const mongoose=require('mongoose');

require('../connectServer');
//const { nftSchema,productSchema,nftModel,productModel}=require('../models/otherModel');

const userSchema=new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,required:true},
    
    username:{type:String,required:true},
    boughtProducts:{type:[
        {type:Number,ref:'ProductModel'}
    ]},
    
})
const userModel=new mongoose.model('UserModel',userSchema);

module.exports={
    userModel
};