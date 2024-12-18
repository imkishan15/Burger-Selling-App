import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Payment from '../Pages/Payment'
import Register from '../Pages/Register'
import Menu from '../Pages/Menu'
import About from '../components/About'
import Footer from '../components/Footer'
import { cartProducts } from '../Store/cart/CardSlice'
import { useSelector } from 'react-redux'
import { AddressForm } from '../components/Addressform'
import Success from '../components/Success'


const Navigation = () => {
  const productsIncart = useSelector(cartProducts)
  return (
    <BrowserRouter>
      <Header cartcount={productsIncart ? productsIncart.length : 0} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/address' element={<AddressForm />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Navigation