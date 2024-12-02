import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
// import ProductPage from "./pages/productsPage";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            Acho
          </Link>
        </div>
        <nav className="nav-links">
    
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/industry" className="nav-link">
            Industry
          </Link>
          
        </nav>
        <button className="demo-button">Book a Demo</button>
      </div>
    </header>
  );
};

export default Navbar;
