

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Checkout.css'; 
import logo from './images/logo.png';
import sociallinks from './images/socialmedialinks.png';

const ProductList = () => {
  const [ setProducts] = useState([]);
  const [cart] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, );

  

  

  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="logo" />
      </header>
      
      <main>
        <nav>
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/our-story" activeClassName="active">Our Story</NavLink>
          <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
          <NavLink to="/cart" activeClassName="active">Cart ({cart.length})</NavLink>
          {}
          <NavLink to="/product-list" activeClassName="active">Shop Now</NavLink>
        </nav>
        
        <div class="TopBox"></div>
        
        <h2>One step closer to luxury.</h2>
        <div class="intro-text">
          <p>Thank you for shopping with us!</p>
        </div>
        
        
      </main>
      
      <div class="footer">
        <p>&copy; 2023 Ethereal Finds. All rights reserved.</p>
        
        <div class="footer-nav">
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/our-story" activeClassName="active">Our Story</NavLink>
          <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
          <NavLink to="/cart" activeClassName="active">Cart</NavLink>
          {}
          <NavLink to="/product-list" activeClassName="active">Shop Now</NavLink>
        </div>

        <div class="sociallinks">
          <img src={sociallinks} alt="sociallinks" className="sociallinks" />
        </div>
      </div>
    </div>
  );
};

export default ProductList;

