import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../redux/product/action";
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
  axios.get(`https://beckendfshop.herokuapp.com/cart`).then((e)=>{
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
  axios.delete(`https://beckendfshop.herokuapp.com/cart/${id}`).then(()=>{
    getData()
  })
}


 
 
 
 

  return (

    
    <div>
        <br />
        <br />
        <br />
        <br />
 {data.map((data)=>{
   return <div className="cartpagemaindiv">
     <div className="cart-imagediv"> <img className="cart-image" src={data.image} alt="" />
     </div>
     
     <div className="cartpricedeletediv"> 
      <div className="cartpricediv"> <p className="cartprice">{data.title}</p> </div> 


       <div className="cartp">
         <div className="cartp1"><p className="cartp1p">₹{data.price}</p></div>
         <div className="cartp2"><p className="cartp2p">{data.offer}%Off</p></div>
         <div className="cartp3"><p className="cartp3p">Hurry! <BoltOutlinedIcon/></p></div>
         
       </div>
       
       <div className="buttonforcheckout">
         <div>
       <button className="remove" onClick={()=>{
     deleteData(data._id)
      }}>Remove</button>
      </div>
      <div>
      </div>
      </div>
     </div>
     
   </div>

 })}


<div>
<h1>Total price <span><p className="sum"></p></span></h1>
        <button className="btn1" onClick={()=>{
          navigate("/Checkout")
        }}>Proceed to payment</button>
      </div>
      
      
      
    </div>
  );
};
export default Cart