import React from 'react'
import { useEffect} from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { storeProducts } from '../actions/productActions';
import "./Products.css"

function Products(props) {
    useEffect(() => props.storeProducts(),[])
    return (
        <div className="product-container">
            <h2 className="product-heading">Products</h2>
            <ul className="product-list">
            {
                [...Array(props.products.products.length).keys()].map((index) => {
                    return (
                        <ProductCard products={props.products.products} key={index} productIndex={index}/>
                    )
                })
            }
            </ul>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        products: state.products
    };
};

export default connect(mapStatetoProps, { storeProducts })(Products)
