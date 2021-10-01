// Import Dependencies 
import axios from '../axios';

// Import action types
import {
    STORE_PRODUCTS,
    CHANGE_QUANTIY,
    GET_BASKET,
    CLEAR_BASKET,
    RESET_BASKET
} from './types'

// Save products to state
export const storeProducts = () => dispatch => {
    axios.get("api/products/list")
    .then(res => {
        let products = res.data.products;
        for (let i =0; i < products.length; i++) {
            products.quantity = 0;
        };
        dispatch({
            type: STORE_PRODUCTS,
            payload: res.data.products
        })
    })
    .catch(err => {
            console.log(err);
        } 
    );
};

// Quantity Management, handled in reducer as needs to modify the existing store
export const changeQuantity = (delta,index) => dispatch => {
    dispatch({
        type: CHANGE_QUANTIY,
        payload: {
            delta,
            index
        }
    })
};

// Basket Management
export const getBasket = user => dispatch => {
    axios.get("/api/basket", { params: { userId: user.id }})
    .then(res => {
        const basket = checkBasket(res.data.basket);
        dispatch({
            type: GET_BASKET,
            payload: basket
        })
    })
    .catch(err => console.log(err))
};

const checkBasket = basket => {
    if (basket) {
        return basket;
    } else if (localStorage.getItem("basketProducts")) {
        return {
            userId: null,
            basketProducts: JSON.parse(localStorage.getItem("basketProducts"))
        }; 
    } else {
        return null;
    }  
}; 


// Checkout Products
export const checkoutProducts = (basket, user) => dispatch => {
    console.log("Clicked");
    axios.post("/api/orders", {basketProducts: basket}, {params: {userId: user.id} })
    .then(res => console.log(res))
    .then(() => {
        for (let i =0; i < basket.length; i++) {
            basket[i].quantity = 0;
        }
        dispatch({
            type: CLEAR_BASKET,
            payload: basket
        })
    })
    .catch(err => console.log(err))
};

export const resetCheckout = () => dispatch => {
    dispatch({
        type: RESET_BASKET
    })
};