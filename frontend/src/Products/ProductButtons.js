import React, { useState } from 'react'
import { connect } from 'react-redux';
import { changeQuantity, getBasket, postBasket } from '../actions/productActions';

function ProductButtons(props) {
    const [trigger, setTrigger] = useState(0)
    const index = props.productIndex;
    let products = [];
    if (props.products.userBasket) {
        products = props.products.userBasket
    } else {
        products = props.products.products
    }
    const item = products[index];
    const { quantity } = item;
    const user = props.auth.user;
    
    const handleQuantityChange = (user, delta, index) => {
        props.changeQuantity(delta, index);
        props.postBasket(user);
        setTrigger(Math.random());
    }
    return (
        <>
        {
            quantity > 0 ?  
                <div className="quantity">
                    <button onClick={()=> {handleQuantityChange(user, -1, index)}} className="quantity-btn">-</button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={() => {handleQuantityChange(user, 1, index)}} className="quantity-btn">+</button>
                </div> : 
                <button onClick={() => {handleQuantityChange(user, 1, index)}} className="add-basket">Add to Basket</button>
        }
        </>
    )
}

const mapStatetoProps = state => {
    return {
        auth: state.auth,
        products: state.products,
        userBasket: state.userBasket
    }
};

export default connect(mapStatetoProps, { changeQuantity, getBasket, postBasket })(ProductButtons)