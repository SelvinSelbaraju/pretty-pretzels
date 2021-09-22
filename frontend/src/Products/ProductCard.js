import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeQuantity} from '../actions/productActions';

function ProductCard(props) {
    const [trigger, setTrigger] = useState(0)
    const index = props.productIndex;
    const item = props.products.products[index];
    const { name, description, imgUrl, quantity } = item
    return (
        <li className="product">
            <img className="product-img" src={imgUrl} alt={name} />
            <h4 className="product-name">{name}</h4>
            <p className="product-desc">{description}</p>
            {
            quantity > 0 ?  
                <div className="quantity">
                    <button onClick={()=> {props.changeQuantity(-1, index); setTrigger(Math.random())}} className="quantity-btn">-</button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={()=> {props.changeQuantity(1, index); setTrigger(Math.random())}} className="quantity-btn">+</button>
                </div> : 
                <button onClick={() => {props.changeQuantity(1, index); setTrigger(1)}} className="add-basket">Add to Basket</button>
            }
        </li>
    )
};

const mapStatetoProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStatetoProps, { changeQuantity })(ProductCard)