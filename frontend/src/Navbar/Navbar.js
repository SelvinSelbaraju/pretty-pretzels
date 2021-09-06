import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from './logo.svg';
import cart from './cart.svg';
import circle from './Ellipse 1.svg'



function Navbar() {
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
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Products</a></li>
                    <li><a href="#" className="nav-link">Login</a></li>
                    <li><a href="#" className="nav-link">Register</a></li>
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
