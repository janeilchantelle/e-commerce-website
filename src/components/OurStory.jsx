// Home.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ourstory.css';
import ourstory from './images/ourstory.png';

import sociallinks from './images/socialmedialinks.png'
import logo from './images/logo.png'

const Home = () => {
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
          <NavLink to="/cart" activeClassName="active">Cart</NavLink>
          {}
          <NavLink to="/product-list" activeClassName="active">Shop Now</NavLink>
        </nav>
      <div class = "TopBox">
      <div className="overlay-text">Welcome to Ethereal Finds, where every product tells a story of affordable luxury.
      <br></br>
      <br></br>
      Established in 2023 on the picturesque shores of Newfoundland, Ethereal Finds is not just an e-commerce store; 
      it's an embodiment of sophistication and affordability. Founded with a passion for curating exquisite items, 
      we envisioned a platform where everyone could experience the joy of indulging in luxurious
      products without breaking the bank.

Our story is one of dedication to quality and a commitment to making refined
living accessible to all.  <br></br>
<br></br>
At Ethereal Finds, the story of luxury begins with you.</div>

       <img src={ourstory} alt="ourstory" className="ourstory" />
      

</div>
        
      </main>
      <h2>Shop Luxury. Shop Affordability.</h2>

      

            <div class ="midbox">
        <p> Embark on a journey of elegance as you navigate through our latest collection, featuring timeless fashion and cutting-edge electronics. 
          At Ethereal Finds, we're committed to making refined living accessible to everyone. </p>
      </div>
          

     

        
      

      <div class="footer">
        
        
        <p>&copy; 2023 Ethereal Finds. All rights reserved.</p>
        {}

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

    </div>
  );
};

export default Home;
