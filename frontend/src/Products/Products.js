import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { storeProducts, getBasket } from '../actions/productActions';
import "./Products.css"

function Products(props) {
    const fetchData = (user =props.auth.user) => {
        props.storeProducts();
        props.getBasket(user);
    }
    const basket = props.products.userBasket.basketProducts;
    const products = props.products.products
    useEffect(()=> fetchData(), []);
    return (
        <>
            { props.products.loading ?
                <h1>Loading...</h1> :
                <div className="product-container">
                    <h2 className="product-heading">Products</h2>
                    <ul className="product-list">
                    {
                        [...Array(products.length).keys()].map((index) => {
                            return (
                                <ProductCard products={basket ? basket : products} key={index} productIndex={index}/>
                            )
                        })
                    }
                    </ul>
                </div>
            } 
        </>
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
