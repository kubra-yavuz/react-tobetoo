import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cartActions";

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //Add to cart işlemi
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case REMOVE_FROM_CART:
            //remove işlemi
            return { ...state, cartItems: state.cartItems.filter(i => i.id !== action.payload.id) }
        case CLEAR_CART:
            //clear işlemi
            return { ...state, cartItems: [] }

        default:
            return state;
    }
}