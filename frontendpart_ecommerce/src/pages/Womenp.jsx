import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,delTodo} from "../redux/product/action"
import {getWomendata} from "../redux/product/action"
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchIcon from '@mui/icons-material/Search';

const Women = () => {
  const [search,setSeacrh] =useState("")
const navigate=useNavigate()
    const dispatch=useDispatch()
    const todos=useSelector((store)=>(store.todo))
    useEffect(()=>{
    getData()
    },[])
    // we r fetching data using this function
    const getData=()=>{
        // axios.get("https://beckendfshop.herokuapp.com/women").then((res)=>{
        // dispatch(addTodo(res.data))
        // })
        dispatch(getWomendata)
    }
    
    const [change,setChange] =useState(false)

const handleSort =(sort,value)=>{
    if(sort === 'asc' && value==='price'){
        todos.sort((a,b)=> a.price-b.price)
        setChange(!change)
      };

    if(sort === 'dsc' && value==='price'){
        todos.sort((a,b)=> b.price-a.price)
        setChange(!change)
      };

      if(sort === 'asc' && value==='name'){
        todos.sort((a,b)=> {
          if(a.name>b.name){
            return 1;
          } else {
            return -1;
          }
        })
        setChange(!change)
      }
      if(sort === 'dsc' && value==='name'){
        todos.sort((a,b)=> {
          if(a.name<b.name){
            return 1;
          } else {
            return -1;
          }
        })
        setChange(!change)
  
      };
      if(sort === 'asc' && value==='discount'){
        todos.sort((a,b)=> a.offer-b.offer)
        setChange(!change)
      };

    if(sort === 'dsc' && value==='discount'){
        todos.sort((a,b)=> b.offer-a.offer)
        setChange(!change)
      };  
      

}

  return (
    <>
    <Navbar/>
 <br />

 <div className='product_topbar'style={{display:"flex"}} >
 <div className='product_search_icon_div' >
        <input className='input1'  type="text" placeholder='search' 
        onChange={(event)=>{
          setSeacrh(event.target.value)
          }}
        
        /><SearchIcon/>
        </div>
        <button className="button-62" onClick={()=>{handleSort('asc','price')}} >Low to High Price</button>
        <button className="button-62" onClick={()=>{handleSort('dsc','price')}} >High to Low Price</button>
        <button className="button-62" onClick={()=>{handleSort('asc','name')}} >Sort By Name A-Z</button>
        <button className="button-62" onClick={()=>{handleSort('dsc','name')}} >Sort By Name Z-A</button>
        <button className="button-62" onClick={()=>{handleSort('asc','discount')}} >Sort By Offer(L-H)</button>
        <button className="button-62" onClick={()=>{handleSort('dsc','discount')}} >Sort By Offer (H-L)</button>
        <br />
        </div>
      <hr />
    
    <div className="productShow_container">
          {
              todos.filter((e)=>{
                if(search===""){
                  return e
                }
                else if(e.title.toLowerCase().includes(search.toLowerCase())){
                 return e
                }
              }).map((e)=>{
                let ratings=Math.floor(Math.random() * 5) + 1;
                let buyers=Math.floor(Math.random() * 10000) + 1
                  return <div key={e.id} className="product_showdiv" onClick={()=>{
                    navigate(`/Women/${e._id}`)
                  }} >

                    <div className="PS_img_div">
                   
                    <img className="img1" src={e.image} alt="" />
                    </div>
                    <div className='PS_div_body'>
                    <div className='PS_title'>{e.title}</div>
                   
                    <div className='PS_price' >₹{e.price} <span className='original_price' >{(e.price*(100-e.offer)/100)}</span>  <span className='discountp' >{e.offer}%Off</span> </div>
                    
                     <div className='rating_div' >⭐{ratings} ({buyers}) 
                     
                     <p><span>Fshop </span> assured </p> </div>

                    </div>

                   </div>
              })
          }
    </div>
    <br />
    <br />
    <br />
    <Footer/>
    </>
  )
}

export default Women