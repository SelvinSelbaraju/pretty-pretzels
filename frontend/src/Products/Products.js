import React from 'react'
import { useEffect} from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { storeProducts, getBasket } from '../actions/productActions';
import "./Products.css"

function Products(props) {
    useEffect(() => {props.storeProducts(); props.getBasket(props.auth.user)},[]);
    let products = [];
    if (props.products.userBasket) {
        products = props.products.userBasket;
    } else {
        products = props.products.products
    }
    return (
        <div className="product-container">
            <h2 className="product-heading">Products</h2>
            <ul className="product-list">
            {
                [...Array(products.length).keys()].map((index) => {
                    return (
                        <ProductCard products={products} key={index} productIndex={index}/>
                    )
                })
            }
            </ul>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        auth: state.auth,
        products: state.products,
        userBasket: state.userBasket
    };
};

export default connect(mapStatetoProps, { storeProducts, getBasket })(Products)
