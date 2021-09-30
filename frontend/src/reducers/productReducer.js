import { STORE_PRODUCTS, CHANGE_QUANTIY, GET_BASKET } from "../actions/types";

const initialProductState = {
    products: [],
    userBasket: [],
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
                }
        default:
            return state;
    }
}

export default reduce;