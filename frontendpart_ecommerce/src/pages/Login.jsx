import  React, { useState } from "react"
import Navbar from '../components/Navbar'

import {Link}  from "react-router-dom"
 import axios  from "axios"

import { useNavigate } from "react-router-dom"


const Login = () => {
 
  const  navigate =useNavigate()
  const [user,setUser] = useState({
     
      email:"",
      password:""
  })

  const handleChange =e=>{
      const{id,value} =e.target

      setUser({
          ...user,
          [id]:value,
     
      })
  }


  const login  =() =>{
      axios.post("https://beckendfshop.herokuapp.com/login",user)
      .then(res=>{alert("login successful ")
         
              navigate("/")
          }
         
      
      )
  }

  return (
    
    <div>
      <Navbar/>
      <div className='signup_page_body' >
      <div class="container">
  <div class="header">
    <h2>Log In</h2>
  </div>
  <form id="form" class="form">
    <div class="form-control">
      <label for="username">Email</label>
      <input type="email"  id="email" value={user.email} placeholder="Enter Your email" onChange={handleChange} />
      <small>Error message</small>
    </div>
    <div class="form-control">
      <label for="username">Password</label>
      <input type="password"  id="password" value={user.password} placeholder="Enter Your password" onChange={handleChange} />
      <small>Error message</small>
    </div>
 
    <button onClick= {login}>LogIn</button>
    <br />
    <label className="label" htmlFor="">Don't have an account?</label>
        <Link className="link" to="/Signup">Register</Link>
  </form>
</div>
      
      </div>
      
      </div>
  )
}

export default Login