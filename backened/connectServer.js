const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://kaushandutta5:Kaushan2021!@campus-management.l4w9h.mongodb.net/trash2gem?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Successful connection....");
}).catch((err)=>{
    console.log(err);
})
