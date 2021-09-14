import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = {};

const middlware = [thunk];

// The first argument is an empty root reducer
// Reducers take in a state and an action, and return an update state
// Composer makes a function of arguments from right to left
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;