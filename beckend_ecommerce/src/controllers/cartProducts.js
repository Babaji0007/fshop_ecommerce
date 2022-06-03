const express = require('express');
const router = express.Router()
const Cart = require("../modal/cartModel")

router.post("",async(req,res)=>{
    try {
        //     const product = await Headphone .create(req.body);
        const cart = await Cart.create(req.body);
        res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {
        const cart  = await Cart.find().lean().exec();
        res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const cart  = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const cart  = await Cart.findById(req.params.id).lean().exec()
         res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.delete("/:id",async(req,res)=>{
try {
    const cart  = await Cart.findByIdAndDelete(req.params.id);
    return res.send(cart)
} catch (err) {
    return res.status(500).send(err.message)
}
})
router.get("/delete",async(req,res)=>{
    try {
        products.cart.deleteMany({})
        const cart  =await Cart.find().lean().exec();
               return res.send(cart)
    } catch (err) {
        return res.status(500).send(err.message)
    }
    })
module.exports=router