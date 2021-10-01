import { STORE_PRODUCTS, CHANGE_QUANTIY, GET_BASKET, CLEAR_BASKET, RESET_BASKET } from "../actions/types";

const initialProductState = {
    products: [],
    userBasket: [],
    loading: true,
    checkedOut: false
};

function reduce(state=initialProductState, action) {
    switch (action.type) {
        case STORE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case CHANGE_QUANTIY:
            const { delta, index } = action.payload;
            const basketProducts = state.userBasket.basketProducts;
            if (basketProducts) {
                state.userBasket.basketProducts[index].quantity = Math.max(state.userBasket.basketProducts[index].quantity+delta, 0);
            } else {
                state.userBasket[index].quantity = Math.max(state.userBasket[index].quantity+delta, 0);
            }
            return state;
        case GET_BASKET:
            const userBasket = action.payload ? action.payload : state.products;
                return {
                    ...state,
                    userBasket: userBasket
                };
        case CLEAR_BASKET:
            state.userBasket.basketProducts = action.payload;
            return {
                ...state,
                checkedOut: true
            };
        case RESET_BASKET:
            return {
                ...state,
                checkedOut: false
            }
        default:
            return state;
    }
}

export default reduce;