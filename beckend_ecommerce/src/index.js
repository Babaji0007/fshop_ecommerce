//mongodb+srv://rahul:<password>@cluster0.ojidj.mongodb.net/test
const express  = require("express");
const cors = require("cors")
require("dotenv").config()
const port=process.env.PORT||2200
const app = express();
app.use(express.json());
app.use(cors())
const connect  = require("./configs/db")

const menController  = require("./controllers/menProducts")
const womenController  = require("./controllers/womenProducts")
const {register,login}=require("./controllers/auth")
const CartController  = require("./controllers/cartProducts")
const kidsController  = require("./controllers/kidsProduts")
app.post("/register",register)
app.post ("/login",login)
app.use("/women",womenController)
app.use("/men",menController)
app.use("/kids",kidsController)
app.use("/cart",CartController)

app.listen(port,async function(){
    try {
        await connect()
        console.log(`Port ${port} is working fine`)
    } catch (error) {
        console.log(error.message)
    }
})