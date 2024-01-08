import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/product-list" element={<ProductList />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Home" element={<ProductList />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
