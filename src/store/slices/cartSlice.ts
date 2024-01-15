import { createSlice } from "@reduxjs/toolkit";
import postService from "../../services/postService";


export const cartSlices = createSlice({
    name: "cart",
    initialState: { cartItems : JSON.parse(localStorage.getItem("cart")!) || [] },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            localStorage.setItem("cart",JSON.stringify(state.cartItems));

      
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item: any) => item.id !== action.payload.id,
            );
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        clearCart: state => {
            state.cartItems = [];
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
    },
});

export const cartReducer = cartSlices.reducer;
export const cartActions = cartSlices.actions;