import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import { Link } from 'react-router-dom';
import topboxpic from './images/topboxpic.jpg';
import featuredProduct1 from './images/featuredProduct1.jpg';
import featuredProduct2 from './images/featuredProduct2.jpg';
import featuredProduct3 from './images/featuredProduct3.jpg';
import midboxpic from './images/midboxpic.jpg';
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
      <button className="shop-now-button" onClick={() => window.location.href = "/product-list"}>
            Shop Now
          </button>      <img src={topboxpic} alt="TopBox" className="top-box-image" />
      

</div>
        
      </main>
      <h2>Affordable Luxury. Our latest collection now available.</h2>

      <div class = "intro-text">
      <p>   Ethereal Finds is your premier destination for indulging in affordable luxury. 
            Immerse yourself in a world of sophistication where fashion and electronics 
            seamlessly blend to elevate your lifestyle.<br></br> Discover 
            an enchanting shopping experience where quality meets affordability, offering 
            you access to a collection of carefully chosen products. 
            <br></br>
            <br></br>
            From exquisite fashion pieces that redefine elegance to state-of-the-art 
            electronics that enhance your daily routine, Ethereal Finds caters to your 
            desire for refinement without compromise. <br></br>
            <br></br>
            Welcome to Ethereal Finds, where luxury meets 
            affordability in every click.</p>
            </div>

            <div class ="midbox">
        {}
        <img src={midboxpic} alt="midboxpic" className="midbox-image" />
        <p> Immerse yourself in sophistication as you explore our latest offerings, from timeless fashion pieces to cutting-edge electronics. At Ethereal Finds, we believe that refined living should be accessible to all. </p>
      </div>
            <div className="Featured-Products">
  {}
  <div className="featured-product-box">
    <img src={featuredProduct1} alt="Featured Product 1" />
    {}
    <Link to="/product-list" className="featured-product-button">
      <button>Shop Style</button>
    </Link>
  </div>

  <div className="featured-product-box">
    <img src={featuredProduct2} alt="Featured Product 2" />
    <Link to="/product-list" className="featured-product-button">
      <button>Shop Innovation</button>
    </Link>
  </div>

  <div className="featured-product-box">
    <img src={featuredProduct3} alt="Featured Product 3" />
    <Link to="/product-list" className="featured-product-button">
      <button>Shop Affordability</button>
    </Link>
  </div>
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
