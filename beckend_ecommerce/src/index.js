//mongodb+srv://rahul:<password>@cluster0.ojidj.mongodb.net/test
const express  = require("express");
// const cors = require("cors")


const app = express();
app.use(express.json());
// app.use(cors())
const connect  = require("./configs/db")

// const registerController = require("./Controller/register.controller");
// const loginController = require("./Controller/login.controller");

const menController  = require("./controllers/menProducts")
const womenController  = require("./controllers/womenProducts")

app.use("/women",womenController)
// app.use("/register", registerController);
// app.use("/login", loginController);
app.use("/men",menController)

app.listen(2100,async function(){
    try {
        await connect()
        console.log("Port 2100 is working fine")
    } catch (error) {
        console.log(error.message)
    }
})