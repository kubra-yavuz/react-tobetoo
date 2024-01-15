//ana depo

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartSlices } from "./slices/cartSlice";
import { authReducer } from "./slices/authSlice";
import { postReducer } from "./slices/postSlise";

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    post: postReducer,
});

export const globalStore = configureStore({
    reducer: rootReducer,
});