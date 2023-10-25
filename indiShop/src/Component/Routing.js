import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Products from './Products/Products';
import About from './About/About';
import Cart from './Cart/Cart';

const Routing =()=> {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default Routing;