import { combineReducers } from 'redux';

import cartReducer from './cart'

const appReducer = combineReducers({
    cartReducer,
});

export default appReducer;