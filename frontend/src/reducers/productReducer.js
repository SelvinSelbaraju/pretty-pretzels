import { STORE_PRODUCTS, CHANGE_QUANTIY, GET_BASKET, POST_BASKET } from "../actions/types";
import axios from "../axios";
import { getBasket } from "../actions/productActions";

const initialProductState = {
    products: [],
    userBasket: [],
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
            state.userBasket[action.payload.index].quantity = Math.max(state.userBasket[action.payload.index].quantity+action.payload.delta, 0);
            return state;
        case GET_BASKET:
            return {
                ...state,
                userBasket: action.payload.basketProducts
            }
        case POST_BASKET:
            const basketProducts = state.userBasket
            const userId = action.payload.id
            axios.post("/api/basket", { basketProducts }, { params: { userId } })
            .then(res => getBasket(action.payload));
            return state;
        default:
            return state;
    }
}

export default reduce;