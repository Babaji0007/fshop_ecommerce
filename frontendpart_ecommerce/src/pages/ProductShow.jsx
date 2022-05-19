// import "./Product.css"


import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,delTodo} from "../redux/product/action"
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchIcon from '@mui/icons-material/Search';
const Todos = () => {
  const [search,setSeacrh] =useState("")
const navigate=useNavigate()
    const dispatch=useDispatch()
    const todos=useSelector((store)=>(store.todo))
    useEffect(()=>{
    getData()
    },[])
    // we r fetching data using this function
    const getData=()=>{
        axios.get("http://localhost:2100/Product").then((res)=>{
        dispatch(addTodo(res.data))
        })
    }
    




    // we r deleting data using this function
    const handleDelete=(id)=>{
      axios.delete(`http://localhost:2100/Product/${id}`).then(()=>{
          dispatch(delTodo(id))
          getData()
      })
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
        todos.sort((a,b)=> a.discount-b.discount)
        setChange(!change)
      };

    if(sort === 'dsc' && value==='discount'){
        todos.sort((a,b)=> b.discount-a.discount)
        setChange(!change)
      };  
      

}

  return (
    <>
    <Navbar/>
 <br />
 <br />
 <div className='product_search_icon_div' >
        <input className='input1'  type="text" placeholder='search' 
        onChange={(event)=>{
          setSeacrh(event.target.value)
          }}
        
        /><SearchIcon/>
        
        </div>

 {/* <input className="input1" type="text" placeholder="You can search product"
       onChange={(event)=>{
       setSeacrh(event.target.value)
       }}/> */}
      {/* <br /> */}
       
        <button className="button-62" onClick={()=>{handleSort('asc','price')}} >Low to High Price</button>
        <button className="button-62" onClick={()=>{handleSort('dsc','price')}} >High to Low Price</button>
        <button className="button-62" onClick={()=>{handleSort('asc','name')}} >Sort By Name A-Z</button>
        <button className="button-62" onClick={()=>{handleSort('dsc','name')}} >Sort By Name Z-A</button>
        <button className="button-62" onClick={()=>{handleSort('asc','discount')}} >Sort By Offer(L-H)</button>
        <button className="button-62" onClick={()=>{handleSort('dsc','discount')}} >Sort By Offer (H-L)</button>
        <br />
        <br /><br />
      <hr />
    
    <div className="productdiv">
          {
              todos.filter((e)=>{
                if(search===""){
                  return e
                }
                else if(e.name.toLowerCase().includes(search.toLowerCase())){
                 return e
                }
              }).map((e)=>{
                  return <div key={e.id} className="showdiv" onClick={()=>{
                    navigate(`/product/${e.id}`)
                  }} >

                    {/* <div className="offer">
                      <button className="offerbutton">{e.discount}%Off</button>
                    </div> */}
                    <div className="showdiv1">
                   
                    <img className="img1" src={e.image} alt="" />
                    </div>
                    <div className="nameprice">
                    <p className="name">{e.name}</p>
                    <div className="pricedivbutton">
                      <div className="pricediv"><p className="price">₹{e.price}</p></div>
                      <div className="addtocartbutton"><button className="button-62">See Details</button></div>
                    </div>
                    <div className="offer">
                      <button className="offerbutton">{e.discount}%Off</button>
                    </div>
                    </div>
                      
                     
                   </div>
              })
          }
    </div>
    <Footer/>
    </>
  )
}

export default Todos

// key={e.id}
// <button onClick={()=>{
//   handleDelete(e.id)
// }}>Delete</button>