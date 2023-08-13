const mongoose=require('mongoose');

require('../connectServer');

const visitorSchema=new mongoose.Schema({
    email:{type:String,required:true},
    vistorDesig:{type:String,enum:["User","Owner","Manager","Community"]},
    isProfileCreated:{type:Boolean,default:false}
});
const visitorModel=new mongoose.model("VisitorModel",visitorSchema);

module.exports={
    visitorModel
}

