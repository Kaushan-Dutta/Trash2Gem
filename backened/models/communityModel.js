const mongoose = require('mongoose');

require('../connectServer');

const communitySchema=new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,required:true},
    communityName:{type:String,required:true},
    description:{type:String,required:true},
    location:{
        type:{
            latitude:{type:Number,required:true},
            longitude:{type:Number,required:true}
        }
    },
    image:{
        type:String,required:true
    },
    products:{type:[
        {type:Number,ref:'ProductModel'}
    ]}
    
})
const communityModel=new mongoose.model('CommunityModel',communitySchema);
module.exports = {communityModel};