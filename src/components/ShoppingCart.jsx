// ShoppingCart.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sociallinks from './images/socialmedialinks.png'
import './ShoppingCart.css'; 
import logo from './images/logo.png'

const ShoppingCart = () => {


  return (
    
    <div>
        <header>        
        <img src={logo} alt="logo" className="logo" />

        
      </header>
      <h2>Shopping Cart</h2>
      <nav>
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/our-story" activeClassName="active">Our Story</NavLink>
          <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
          <NavLink to="/ShoppingCart" activeClassName="active">Cart ({ShoppingCart.length})</NavLink>
          {}
          <NavLink to="/product-list" activeClassName="active">Shop Now</NavLink>
        </nav>
      
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};
<div class="footer">
        
        
<p>&copy; 2023 Ethereal Finds. All rights reserved.</p>

<div class= "footer-nav">
<NavLink to="/" activeClassName="active">Home</NavLink>
  <NavLink to="/our-story" activeClassName="active">Our Story</NavLink>
  <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
  <NavLink to="/cart" activeClassName="active">Cart</NavLink>
  {}
  <NavLink to="/product-list" activeClassName="active">Shop Now</NavLink>


</div>

<div class = "sociallinks">
<img src={sociallinks} alt="sociallinks" className="sociallinks" />

</div>
</div>
export default ShoppingCart;
