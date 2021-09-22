import React from 'react'
import { useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
                props.products.products.map((item, index) => {
                    return (
                        <ProductCard item={item} key={index} productIndex={index}/>
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
