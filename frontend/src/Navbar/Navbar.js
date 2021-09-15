import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.svg';
import cart from './cart.svg';
import circle from './Ellipse 1.svg'


function Navbar() {
    console.log(localStorage.jwtToken);
    const [circleHover, setCircleHover] = useState(false); 

    const handleCircleHover = () => {
        setCircleHover(true)
    }

    const handleCircleLeave = () => {
        setCircleHover(false);
    }

    return (
            <header>
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <h4 className="logo-text">Pretty Pretzels</h4>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/" className="nav-link">About</Link></li>
                        <li><Link to="/" className="nav-link">Products</Link></li>
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/register" className="nav-link">Register</Link></li>
                    </ul>
                </nav>
                <div className="cart-container" onMouseEnter={handleCircleHover} onMouseLeave={handleCircleLeave}>
                    <a href="#"><img className={circleHover ? "cart-animate" : "cart-static"} src={cart} alt="Cart"/></a>    
                </div>
                <img className={circleHover ? "circle circle-hover" : "circle"} src={circle} alt=""/>
            </header>
    )
}

export default Navbar
