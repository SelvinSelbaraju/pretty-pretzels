import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'
import { storeProducts } from '../actions/productActions';
import './Products.css' 

function BasketTab(props) {
    useEffect(() => props.storeProducts(),[]);
    let basketEmpty = true;
    const basketProducts = JSON.parse(localStorage.getItem("products"));
    if (basketProducts) {
        const inBasket = basketProducts.filter(product => product.quantity > 0);
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
                    basketProducts.map((product, index) => {
                        return product.quantity > 0 ? <ProductCard products={basketProducts} key={index} productIndex={index}/> : null 
                    })
                }
            </ul>
            }
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStatetoProps, { storeProducts })(BasketTab)
