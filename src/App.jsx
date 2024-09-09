// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterConfig from './router';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <RouterConfig />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
