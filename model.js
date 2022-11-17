const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requireed:true
    },
    rollno:{
        type:String,
        requireed:true
    }
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);


module.exports=User;