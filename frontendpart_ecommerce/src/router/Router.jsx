import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Login  from '../pages/Login'
import Signup from '../pages/Signup'
// import ProductShow from '../pages/ProductShow'
import Cart from '../pages/Cart'
import Todos from '../pages/Kids'
import  {Menpdetails} from '../pages/Menpdetails'
import { CheckOut } from '../pages/Checkout'
import { Success } from '../pages/Success'
import Men from '../pages/Menp'
import Women from '../pages/Womenp'
import Kids from '../pages/Kids'
import { Womenpdetals } from '../pages/Womenpdetals'
import { Kidspdetails } from '../pages/Kidspdetails'

const Router = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="men/:id" element={<Menpdetails/>}></Route>
    <Route path="kids/:id" element={<Kidspdetails/>}></Route>
    <Route path="women/:id" element={<Womenpdetals/>}></Route>
    
    <Route path='/Login' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/Kids' element={<Kids/>} />
    <Route path='/Men' element={<Men/>} />
    <Route path='/Women' element={<Women/>} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/Checkout'element={<CheckOut/>}></Route>
    <Route path="/Success" element={<Success/>}></Route>


    </Routes>


    </div>
  )
}

export default Router