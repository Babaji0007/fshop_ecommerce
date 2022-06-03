import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import axios from "axios";




const Head = () => {

// const[st, setSt]=useState(false)
  const [data,setData]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const handleLogout = () => {
    // localStorage.removeItem("token");
    window.location = "/";

  };

  const getData=()=>{
    axios.get(`https://beckendfshop.herokuapp.com/cart`).then((res)=>{
      setData(res.data)
         getData()
     
    })
    console.log(data.length)
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
        <Link to="/" style={{  color: "#fff", textDecoration: "none"}}><p>Mens</p></Link>
        <Link to="/" style={{  color: "#fff", textDecoration: "none"}}><p>Womens</p></Link>
        <Link to="/" style={{  color: "#fff", textDecoration: "none"}}><p>Kids</p></Link>

        {/* <p>search</p> */}
    </div>
    <div>
    {/* <Link to="/Login" style={{  color: "#fff", textDecoration: "none"}} ><p className='login_status' onClick={handleLogout()} >LogIn</p></Link> */}
    <button className='logbtn'  style={{  color: "#fff", textDecoration: "none",backgroundColor:"black"}} onClick={handleLogout}>
             LogIn
              </button>

     
   
    </div>
       
        
    </div>
  )
}

export default Head