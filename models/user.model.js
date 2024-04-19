const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    phone_no:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    village:{
        type:String,
        required:true,
        },
    address:{
        type:String,
        required:true,
        },

},{timestamps:true})

const User=mongoose.model('User',userSchema)

module.exports=User