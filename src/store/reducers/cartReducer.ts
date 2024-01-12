import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Add to cart işlemi
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case REMOVE_FROM_CART:
            // Remove işlemi
            return { ...state, cartItems: state.cartItems.filter((i:any) => i.id !== action.payload.id) };
        case CLEAR_CART:
            // Clear işlemi
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};

export default cartReducer;