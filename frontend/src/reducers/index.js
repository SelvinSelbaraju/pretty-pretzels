import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import productReducer from './productReducer';

export default combineReducers({auth: authReducer, errors: errorReducer, products: productReducer});