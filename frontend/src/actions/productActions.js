// Import Dependencies 
import axios from '../axios';

// Import action types
import {
    STORE_PRODUCTS,
    CHANGE_QUANTIY
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
    });
};