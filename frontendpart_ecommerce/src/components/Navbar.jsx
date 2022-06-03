import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import axios from "axios";




const Navbar = ({status}) => {
// const[st, setSt]=useState(false)
  const [data,setData]=useState([])

  useEffect(()=>{
    getData()
  },[])

  
  const getData=()=>{
    axios.get(`https://beckendfshop.herokuapp.com/cart`).then((res)=>{
      setData(res.data)
        // getData()
     
    })
    console.log(data.length)
  }
  if(status===true){
  document.querySelector("login_status").innerHTML="LogOut"
  }
  return (
    <div className='navbar'>
    <div>
       <Link to="/" style={{  color: "#fff", textDecoration: "none"}}>
       <p><span>Fshop</span> </p>
       </Link>
       <Link to="/" style={{  color: "#fff", textDecoration: "none"}}>
        <p className ="hi_username">Home</p>
        </Link>
        
        {/* <div className='navbar_search_icon_div' >
        <input className='navbar_search'  type="text" placeholder='search' /><SearchIcon/>
        
        </div> */}
        <Link to="/Men" style={{  color: "#fff", textDecoration: "none"}}><p>Mens</p></Link>
        <Link to="/Women" style={{  color: "#fff", textDecoration: "none"}}><p>Womens</p></Link>
        <Link to="/Kids" style={{  color: "#fff", textDecoration: "none"}}><p>Kids</p></Link>

        {/* <p>search</p> */}
    </div>
    <div>
    <Link to="/Login" style={{  color: "#fff", textDecoration: "none"}} ><p className='login_status' >LogIn</p></Link>
    <Link to="/Signup" style={{  color: "#fff", textDecoration: "none"}} ><p>SignUp</p></Link>
       
       
        <Link to ="/Cart"   >
        
             <div className='navbar_cart_icon_div' >
        <Badge badgeContent={data.length} color="primary">
      <ShoppingCartOutlinedIcon style={{  color: "#fff", textDecoration: "none"}} />
    </Badge>
        </div>
        </Link>
        
   
    </div>
       
        
    </div>
  )
}

export default Navbar