import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector,useDispatch } from 'react-redux';
import { addData } from '../redux/product/action';
import { useNavigate } from 'react-router-dom';


export const  ProductDetail  = () =>{
  const navigate = useNavigate()
  const disPatch=useDispatch();

  const rstore=useSelector((store)=>(store.data));
  
    const [data,setData] = useState([])
    console.log(data)
    const {id} = useParams()
    useEffect(() => {
      axios.get(`http://localhost:2100/Product/${id}`)
      .then((res) => {
        setData(res.data)
        disPatch(addData(res.data))
        // console.log(res.data.cart)
      });
     
    },[id])


    const postData=()=>{
      axios.post(`http://localhost:2100/cart`,rstore).then(()=>{
          alert("data added")
      })
  }

    
    var d = 100- data.discount;
    // console.log(d)
    var ap = Math.floor((100*data.price)/d)
    var price  = data.price-30;
    return (
        
      < >
      <Navbar/>
       <br /><br />
          
            <div className='productdetail1'>
           
            <div className='productdetail4'>
                {/* this is for the image div and button div */}
                <div className='productdetail2'> 
                <img  className='imagedetail' src={data.image} alt="" /></div>
                <div className='productdetail3'>
                    <button onClick={()=>{
                      return postData()
                    }} className='cart'><ShoppingCartOutlinedIcon /> ADD TO CART</button>
                    <button className='buynow' onClick={()=>{
     navigate('/Checkout')
     }} >⚡ BUY NOW</button>
                </div>
            </div>


            <div className='productdetail5'>
                <p className='productdetailname'>{data.name}</p>
                {/* this is for the detail div  */}
                <div className='pricediscountdiv'>
                  <div> <h1 className='priceh1'>₹{data.price}</h1></div>
                  <div className='line-thorughdiv'> <p className='line-through'>₹{ap}</p></div>
                  <div className='discountpdiv'>  <p className='discountp'>{data.discount}%off</p>
                  </div>
                </div>
                
                <h4>Available offer</h4>
                <h4>Bank offer <span className='spanoffer'>  10% off on Citi Credit/Debit Cards, up to ₹1500. On orders of ₹3000 and above</span></h4>
                <h4>Bank offer <span className='spanoffer'>  5% Cashback on  Axis Bank Card</span></h4>
                <h4>Bank offer <span className='spanoffer'> Sign up for PC Mobile Pay Later and get  Gift Card worth</span></h4>
                 
                 <div>
                   <div></div>
                   <div></div>
                 </div>
                 
                {/* <h5>Bank offer</h5> <span><p>10% off on Citi Credit/Debit Cards, up to ₹1500. On orders of ₹3000 and above</p></span> */}
            </div>
            
            </div>
<br />
<br />
<Footer/>

          </>
    )

}