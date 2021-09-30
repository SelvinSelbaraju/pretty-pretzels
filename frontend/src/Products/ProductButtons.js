import React, { useState } from 'react'
import { connect } from 'react-redux';
import { changeQuantity, getBasket } from '../actions/productActions';
import axios from '../axios';

function ProductButtons(props) {
    const [trigger, setTrigger] = useState(1)
    const index = props.productIndex;
    let products = [];
    if (props.products.userBasket.basketProducts) {
        products = props.products.userBasket.basketProducts;
    } else {
        products = props.products.products;
    }
    const item = products[index];
    const { quantity } = item;
    const user = props.auth.user;
    
    const postBasket = (basket, user) => {
        if (user.id) {
            axios.post("/api/basket", { basket }, { params: {userId: user.id} })
            .then(res => getBasket(user))
            .catch(err => console.log(err))
        } else {
            localStorage.setItem("basketProducts", JSON.stringify(basket));
        }
    };

    const handleQuantityChange = (user, delta, index) => {
        props.changeQuantity(delta, index);
        postBasket(products, user);
        setTrigger(trigger*0.99);
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

export default connect(mapStatetoProps, { changeQuantity, getBasket })(ProductButtons)