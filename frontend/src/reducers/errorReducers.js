import { GET_ERRORS } from "../actions/types";

const initialState = {};

function reduce(state=initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};

export default reduce;