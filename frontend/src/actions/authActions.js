// Import dependencies 
import axios from '../axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// Import action types
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from './types'

// Register user action 
export const registerUser = (userData, history) => dispatch => {
    axios.post("api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login if successful register
    .catch(err => {
            console.log(err.response.data);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        } 
    );
};

// Login - get user token  
export const loginUser = userData => dispatch => {
    axios.post("/api/users/login", userData)
    .then(res => {
        // Save token to localStorage from the response
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // set Token to AuthHeader
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set Current User
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User Loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log User Out
export const logoutUser = () => dispatch => {
    // Remove token and basket from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("basketProducts");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object which will set isAuthenticated to false
    dispatch(setCurrentUser(false));
};
