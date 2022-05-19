
import Navbar from '../components/Navbar'
import {Link}  from "react-router-dom"
import { useNavigate } from "react-router-dom"


import  React, { useState } from "react"
import axios from "axios"
const Signup = () => {
  const navigate =useNavigate()
  const [user,setUser] = useState({
      name:"",
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

  const register   =()=>{
      const {name,email,password} = user
      
      if(name && email  && password ){
         
          axios.post("http://localhost:1020/register",user).then(res=>{
              alert("register succesfull")
            navigate("/Login")    
      })
         

      }else{
          alert ("Please fill all the spaces")
      }
     
  }
  return (
    <div>
      <Navbar/>
      <div className='signup_page_body' >
      <div class="container">
  <div class="header">
    <h2>Create Account</h2>
  </div>
  <form id="form" class="form">
    <div class="form-control">
      <label for="username">Username</label>
      <input type="text" id="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange} />
      <small>Error message</small>
    </div>
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

    <button>Submit</button>
    <br />
            <br />
            <label className="label" htmlFor="">Already have account ?</label>
            <Link className="link" to="/login">Login</Link>
  </form>
</div>
      
      </div>
      
      </div>
  )
}

export default Signup