import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../redux/product/action";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 const Cart = () => {

const navigate  = useNavigate()
const [data,setData]=useState([]);
const [count,setCount] =useState(1)

useEffect(()=>{
  getData()
},[])

const increment = (e) => {
  e.quantity++;
  axios
    .patch(`https://beckendfshop.herokuapp.com/cart/${e._id}`, e)
    .then(() => {
      getData();
    });
};
const decrement = (e) => {
  if(e.quantity>1){
    e.quantity--;
  }

  // if (!e.quantity) {
  //   deleteData(e._id);
  // }
  axios
    .patch(`https://beckendfshop.herokuapp.com/cart/${e._id}`, e)
    .then(() => {
      getData();
    });
};
 
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

    
 <div >
      <Navbar/>
      <div className="cart_box" style={{display:"flex"}}>
     <div className="cart_item"style={{overflow:"scroll",height:"600px"}} >
     
        <br />
  {data.map((data)=>{
   return (
   <div className="cartpagemaindiv" >
     <div className="cart-imagediv"> <img className="cart-image" src={data.image} alt="" />
     </div>
     
     <div className="cartpricedeletediv"> 
      <div className="cartpricediv"> <p className="cartprice">{data.title}</p> </div> 


       <div className="cartp">
         <div className="cartp1"><p className="cartp1p">₹{data.price*data.quantity}</p>
         <div className="qty_updown">
                    <span className="qty_updown_span"
                      onClick={() => {
                        increment(data);
                      }}
                    >
                      {" "}
                      +{" "}
                    </span>
                    <span  >{data.quantity}</span>
                    <span className="qty_updown_span"
                      onClick={() => {
                        decrement(data);
                      }}
                    >
                      {" "}
                      -{" "}
                    </span>
                    <p>Qty.</p>
                  </div>
                  <br />
         </div>
         <div className="cartp2"><p className="cartp2p">{data.offer}%Off</p></div>
         <div className="cartp3"><p className="cartp3p">Hurry! <BoltOutlinedIcon/></p></div>
         
       </div>
       
       <div className="buttonforcheckout">
         <div className="btn_qty_cart" >
       <button className="remove" onClick={()=>{
     deleteData(data._id)
      }}>Remove</button>
      {/* <p style={{color:"black",margin:"10px"}} >quantity</p>
      <select id="qty.">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

      </select> */}
            </div>
      <div>
      </div>
      </div>
     </div>
     
   </div>)

 })}
</div>

 <div className="cart_price_sum-box">
      <h1 style={{fontSize: "xxx-large" }} >Total price <span style={{backgroundColour:"white", color:"black"}}><p className="sum"></p></span></h1>
        <button className="btn1" onClick={()=>{
          navigate("/Checkout")
        }}>Proceed to payment</button>
 </div>
 </div>   
      <br />
      <Footer/>
</div>
  );
};
export default Cart