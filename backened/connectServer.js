const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://kaushandutta5:CQT5xHxfCfHMZ0Da@trash2gem.mzwvack.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Successful connection....");
}).catch((err)=>{
    console.log(err);
})
