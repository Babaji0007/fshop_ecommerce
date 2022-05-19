
import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../redux/product/action";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';


 const Cart = () => {

const navigate  = useNavigate()
const [data,setData]=useState([]);
const [count,setCount] =useState(1)

useEffect(()=>{
  getData()
},[])

// let sum =0;
// useEffect(()=>{
  
//   for( let key in data){
//     sum+=data[key].price;
//     console.log("sum1",sum)
//   }
// },[])
// console.log("sum",sum)
 
const dispatch = useDispatch()
console.log("Totalprice",count)

const getData=()=>{
  axios.get(`http://localhost:2100/cart`).then((e)=>{
    var sum  =0;
    setData(e.data)
    dispatch(addData(e.data))
     
    for (let i = 0; i < e.data.length; i++) {
      sum += e.data[i].price * e.data[i].quantity;
    }
    console.log(sum);
    document.querySelector(".sum").innerHTML = "₹" + sum;
    document.querySelector(".sum2").innerHTML =
      "₹" + sum + ".00" + " Place Order";
    document.querySelector(".sum1").innerHTML = "₹" + (sum - 100);
    document.querySelector(".sum_discount").innerHTML = "₹" + (sum - 100);
  });
  
}

console.log("data",data)

const deleteData=(id)=>{
  axios.delete(`http://localhost:2100/cart/${id}`).then(()=>{
    getData()
  })
}
const increment = (e) => {
  e.quantity++;
  axios.patch(`http://localhost:8080/cart/${e.id}`, e).then(() => {
    getData()
  })
}
const decrement = (e) => {
  e.quantity--;
  if (!e.quantity) {
    deleteData(e.id)
  }
  axios.patch(`http://localhost:8080/cart/${e.id}`, e).then(() => {
    getData()
  })
}

 
 
 
 

  return (

    
    <div>
    <Navbar/>
   
        <br />
 {data.map((data)=>{
   return <div className="cartpagemaindiv">
     <div className="cart-imagediv"> <img className="cart-image" src={data.image} alt="" />
     </div>
     
     <div className="cartpricedeletediv"> 
      <div className="cartpricediv"> <p className="cartprice">{data.name}</p> </div> 


       <div className="cartp">
         <div className="cartp1"><p className="cartp1p">₹{data.price}</p></div>
         <div className="cartp2"><p className="cartp2p">{data.discount}%Off</p></div>
           <div className="cartp3"><p className="cartp3p">Hurry! <BoltOutlinedIcon/></p></div>
         
       </div>
       
       <div className="buttonforcheckout">
         <div>
       <button className="remove" onClick={()=>{
     deleteData(data.id)
      }}>Remove</button>
      </div>
      <div>
        <button onClick={()=>{
          navigate("/Checkout")
        }}>Proceed to payment</button>
      </div>
      </div>
     </div>
   </div>

 })}

      
<br />
   <br />  
   <Footer/> 
   
    </div>
  );
};
export default Cart