const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    rollnumber:{
        type:Number,
        required:true
    },
    cnic:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})
module.exports = User = mongoose.model('user',UserSchema)