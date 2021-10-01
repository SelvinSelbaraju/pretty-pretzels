import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'
import { getBasket, checkoutProducts } from '../actions/productActions';
import './Products.css' 

function BasketTab(props) {
    const [trigger, setTrigger] = useState(1);
    let basketEmpty = true;
    const fetchData = (user =props.auth.user) => {
        props.getBasket(user);
    }
    const submitBasket = (basket, user) => {
        props.checkoutProducts(basket, user);
        localStorage.removeItem("basketProducts");
        setTrigger(0.99*trigger);
    }
    const basket = props.products.userBasket.basketProducts;
    const user = props.auth.user;
    useEffect(()=> fetchData(), []);
    if (basket) {
        const inBasket = basket.filter(product => product.quantity > 0);
        if (inBasket.length > 0) {
            basketEmpty = false;
        }
    }

    if (props.products.checkedOut) {
        props.history.push("/thankyou");
    }
    return (
        <div className="product-container">
            <h2 className="product-heading">Your Basket</h2>
            {
                basketEmpty ?
                <div className="basket-empty">
                    <h4 className="basket-empty-title">Your basket is empty!</h4>
                    <button className="view-products"><Link to="/products">View Our Range</Link></button>
                </div> :
            <>
                <ul className="product-list">
                    {
                        basket.map((product, index) => {
                            return product.quantity > 0 ? <ProductCard products={basket} key={index} productIndex={index}/> : null 
                        })
                    }
                </ul>
                <div className="checkout-container">
                    {props.auth.isAuthenticated ?  
                    <button onClick={() => submitBasket(basket, user)} className="checkout-btn">Complete Purchase</button> :
                    <button className="checkout-btn"><Link to="/register">Please Register to Checkout</Link></button>
                    }
                </div>      
            </>
            }
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        auth: state.auth,
        products: state.products
    }
};

export default connect(mapStatetoProps, { getBasket, checkoutProducts })(BasketTab)
