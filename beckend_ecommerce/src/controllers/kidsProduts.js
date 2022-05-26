const express = require('express');
const Kidsproduct =require("../modal/kidsModel");


const router  = express.Router();

router.post("",async(req,res)=>{
    try {
        
  const kidsproduct = await Kidsproduct.create(req.body);
  res.send(kidsproduct)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {

        const kidsproduct  = await Kidsproduct.find().lean().exec();
        res.send(kidsproduct)
        
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {

        const kidsproduct  = await Kidsproduct.findById(req.params.id).lean().exec()
        res.send(kidsproduct)
        
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


module.exports =router