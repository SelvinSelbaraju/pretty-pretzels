import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'
import { getBasket } from '../actions/productActions';
import './Products.css' 

function BasketTab(props) {
    useEffect(() => props.getBasket(props.auth.user),[]);
    let basketEmpty = true;
    let products = [];
    if (props.products.userBasket) {
        products = props.products.userBasket;
    } else {
        products = props.products.products
    }
    if (products) {
        const inBasket = products.filter(product => product.quantity > 0);
        if (inBasket.length > 0) {
            basketEmpty = false;
        }
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
            <ul className="product-list">
                {
                    products.map((product, index) => {
                        return product.quantity > 0 ? <ProductCard products={products} key={index} productIndex={index}/> : null 
                    })
                }
            </ul>
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

export default connect(mapStatetoProps, { getBasket })(BasketTab)
