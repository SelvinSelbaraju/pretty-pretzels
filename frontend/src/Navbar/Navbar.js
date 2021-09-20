import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.svg';
import cart from './cart.svg';
import circle from './Ellipse 1.svg'


function Navbar(props) {
    const [circleHover, setCircleHover] = useState(false); 

    const handleCircleHover = () => {
        setCircleHover(true)
    }

    const handleCircleLeave = () => {
        setCircleHover(false);
    }

    const history = useHistory();
    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
        history.go(0)
    };

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
                        <li><Link to="/products" className="nav-link">Products</Link></li>
                        {
                            props.auth.isAuthenticated ?
                            <>
                                <li><Link to="/dashboard" className="nav-link dashboard">Dashboard</Link></li>
                                <li className="nav-link logout" onClick={onLogoutClick}>Logout</li>
                            </>
                        :
                            <>
                                <li><Link to="/login" className="nav-link">Login</Link></li>
                                <li><Link to="/register" className="nav-link">Register</Link></li>
                            </>
                        }
                    </ul>
                </nav>
                <div className="cart-container" onMouseEnter={handleCircleHover} onMouseLeave={handleCircleLeave}>
                    <a href="/"><img className={circleHover ? "cart-animate" : "cart-static"} src={cart} alt="Cart"/></a>    
                </div>
                <img className={circleHover ? "circle circle-hover" : "circle"} src={circle} alt=""/>
            </header>
    )
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser})(Navbar)
