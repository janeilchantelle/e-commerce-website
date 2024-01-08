import React from 'react';
import { NavLink } from 'react-router-dom';
import './contactus.css';


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
   
        
      </main>
      <h2>Contact Us. We're here for you.</h2>
      <form className="contact-form">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <button type="submit">Submit</button>
  </form>

      

            <div class ="midbox">
        <p> We will respond within 24-48 hours. You can also reach us on Social Media. </p>
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
