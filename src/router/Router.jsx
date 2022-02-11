import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Catalog from '../pages/catalog/Catalog'
import Blog from '../pages/blog/Blog'
import Contact from '../pages/contact/Contact'
import Product from '../pages/Product'
import Cart from '../pages/cart/Cart'

import Login from '../components/login-register/Login'
import Register from '../components/login-register/Register'
import NotFound from '../components/404-not-found/404NotFound'



const Router = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/catalog' element={<Catalog />} exact/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/catalog/:slug' element={<Product />}/>
          <Route path='/about' element={<NotFound />}/>
      </Routes>
  );
};

export default Router;
