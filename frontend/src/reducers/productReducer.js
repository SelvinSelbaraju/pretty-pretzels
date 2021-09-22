import { STORE_PRODUCTS, CHANGE_QUANTIY } from "../actions/types";

const initialProductState = {
    products: [],
    loading: true
};

function reduce(state=initialProductState, action) {
    switch (action.type) {
        case STORE_PRODUCTS:
            action.payload.map(item => {
                item.quantity = 0;
            });
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case CHANGE_QUANTIY:
            state.products[action.payload.index].quantity += action.payload.delta
            return state;
        default:
            return state;
    }
}

export default reduce;