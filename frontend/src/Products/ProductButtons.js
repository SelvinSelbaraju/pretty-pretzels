import React, { useState } from 'react'
import { connect } from 'react-redux';
import { changeQuantity } from '../actions/productActions';

function ProductButtons(props) {
    const [trigger, setTrigger] = useState(0)
    const index = props.productIndex;
    let products = props.products.products;
    if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
    }
    const item = products[index];
    const { quantity } = item;
    
    return (
        <>
        {
            quantity > 0 ?  
                <div className="quantity">
                    <button onClick={()=> {props.changeQuantity(-1, index); setTrigger(Math.random())}} className="quantity-btn">-</button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={()=> {props.changeQuantity(1, index); setTrigger(Math.random())}} className="quantity-btn">+</button>
                </div> : 
                <button onClick={() => {props.changeQuantity(1, index); setTrigger(1)}} className="add-basket">Add to Basket</button>
        }
        </>
    )
}

const mapStatetoProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStatetoProps, { changeQuantity })(ProductButtons)