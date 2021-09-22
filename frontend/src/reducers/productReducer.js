import { STORE_PRODUCTS, ADD_QUANTITY, REMOVE_QUANTITY } from "../actions/types";

const initialProductState = {
    products: [],
    loading: true
};

function reduce(state=initialProductState, action) {
    switch (action.type) {
        case STORE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reduce;