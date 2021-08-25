import React from 'react';
import './Navbar.css';
import logo from './logo.svg';
import cart from './cart.svg';
import circle from './Ellipse 1.png'

function Navbar() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" />
                <h4 className="logo-text">Pretty Pretzels</h4>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Products</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </nav>
            <div className="cart-container">
                <img src={cart} alt="Cart" />    
            </div>
            <img className="circle" src={circle} alt="" />
        </header>
    )
}

export default Navbar
