// This sets the authorization header in axios depending on whether a user is logged in

import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // Apply authorisation token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header if no token
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;