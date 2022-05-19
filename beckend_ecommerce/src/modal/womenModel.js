const mongoose  = require("mongoose");

const womenProductSchema  = new mongoose.Schema({
    title:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    offer:{type:Number, required:true},
},{versionKey:false, timestamps:true})



module.exports=mongoose.model("women",womenProductSchema)