import React from 'react';
import { connect } from 'react-redux';
import ProductButtons from './ProductButtons';

function ProductCard(props) {
    const index = props.productIndex;
    const item = props.products.products[index];
    const { name, description, imgUrl} = item
    return (
        <li className="product">
            <img className="product-img" src={imgUrl} alt={name} />
            <h4 className="product-name">{name}</h4>
            <p className="product-desc">{description}</p>
            <ProductButtons productIndex={index} />
        </li>
    )
};

const mapStatetoProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStatetoProps)(ProductCard)