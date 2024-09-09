// router 导航栏和footer跳转
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import Standards from '../pages/Standards';
import Equipment from '../pages/Equipment';
import Careers from '../pages/Careers';
import ContactUs from '../pages/ContactUs';

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/standards" element={<Standards />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}
