const mongoose  = require("mongoose");

const connect  = ()=>{
    return mongoose.connect("mongodb+srv://rahul:rahul123@cluster0.iz0zh.mongodb.net/products")
//  return mongoose.connect("mongodb://127.0.0.1:27017/test")
}

module.exports = connect