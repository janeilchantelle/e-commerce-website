import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import './ProductList.css'; 
import logo from './images/logo.png';
import sociallinks from './images/socialmedialinks.png';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

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
        
        <h2>Shop our latest collection.</h2>
        <div class="intro-text">
          <p>Start your journey into refined living by exploring our favorite finds.</p>
        </div>
        
        <div className="product-list">
          {products.map(product => (
            <div className="product-container" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <div>{product.title} - ${product.price}</div>
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
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
