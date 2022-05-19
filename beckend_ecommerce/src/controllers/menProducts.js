const express = require('express');
const Menproduct =require("../modal/menModel");


const router  = express.Router();

router.post("",async(req,res)=>{
    try {
        
  const menproduct = await Menproduct.create(req.body);
  res.send(menproduct)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {

        const menproduct  = await Menproduct.find().lean().exec();
        res.send(menproduct)
        
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {

        const menproduct  = await Menproduct.findById(req.params.id).lean().exec()
        res.send(menproduct)
        
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


module.exports =router