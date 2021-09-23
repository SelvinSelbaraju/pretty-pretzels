// Import Dependencies 
import axios from '../axios';

// Import action types
import {
    STORE_PRODUCTS,
    CHANGE_QUANTIY,
    GET_BASKET,
    POST_BASKET
} from './types'

// Save products to state
export const storeProducts = () => dispatch => {
    axios.get("api/products/list")
    .then(res => {
        dispatch(setProducts(res.data.products))
    })
    .catch(err => {
            console.log(err);
        } 
    );
};

const setProducts = products => {
    return {
        type: STORE_PRODUCTS,
        payload: products
    };
};


// Quantity Management
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
        dispatch({
            type: GET_BASKET,
            payload: res.data.basket
        })
    });
};

export const postBasket = user => dispatch => {
    dispatch({
        type: POST_BASKET,
        payload: user
    });
};