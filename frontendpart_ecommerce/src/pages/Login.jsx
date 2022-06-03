import  React , {useState} from "react"
import {Link}  from "react-router-dom"
 import axios  from "axios"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Head from "../components/Head"



 const Login  = ()=>{

    const  navigate =useNavigate()
    const [user,setUser] = useState({  
        email:"",
        password:""
    })

    const handleChange =e=>{
        const{name,value} =e.target
  
        setUser({
            ...user,
            [name]:value,

        })
    }



    const login  =() =>{
        axios.post("https://beckendfshop.herokuapp.com/login",user)
        .then(res=>{
            // localStorage.setItem("token",res.user)
            alert("login successful ")
                navigate("/home")
            }
           
        
        )
    }


 



    return(
        <div> 
            <Head />
            <br />
            <br />
            <br />
        <div className="login_container">
        <h1>Welcome!</h1>
        {/* <h3>Enter your Mail id</h3> */}
        
     
        <input className="login_inputs" type="text" name="email" value={user.email} placeholder="Enter Your E-mail id" onChange={handleChange} />
        <br />
        <br />
        <input className="login_inputs" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
        <br />
        <br />
        <button className="login_submit_btn" 
        onClick=
        {login}
        >Log in</button>
        <br />
        <br />
        <div>Or log in with</div>
        <br />
        <div className="goggle_git_img_logo">
            <button className="Gbtn1">
             <img className="img1" src="https://i.ibb.co/PFnVMG7/Screenshot-2022-03-30-220226.png" alt="" />
            
            </button>
            <button className="Gbtn2">
                <img className="img2" src="https://i.ibb.co/1fNJnVd/Screenshot-2022-03-30-215245.png" alt="" />
            </button>
        </div>
        <br />
        <br />
        {/* <Link to ="signup">Sign up</Link> */}
        <label className="label" htmlFor="">Don't have an account?</label>
        <Link className="link" to="/signup">Register</Link>
        </div>
        <br />
        <br />
        <Footer/>
        </div>
    )
}
export default Login