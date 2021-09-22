// Import Dependencies 
import axios from '../axios';

// Import action types
import {
    STORE_PRODUCTS,
    ADD_QUANTIY,
    REMOVE_QUANTITY
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

 export const setProducts = products => {
    return {
        type: STORE_PRODUCTS,
        payload: products
    };
};