const express = require('express');
const WomenProduct =require("../modal/womenModel");


const router  = express.Router();

router.post("",async(req,res)=>{
    try {
        
  const womenProduct = await WomenProduct.create(req.body);
  res.send(womenProduct)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {

        const womenProduct  = await WomenProduct.find().lean().exec();
        res.send(womenProduct)
        
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {

        const womenProduct  = await WomenProduct.findById(req.params.id).lean().exec()
        res.send(womenProduct)
        
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


module.exports =router