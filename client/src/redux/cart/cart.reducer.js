import { ADD_CART_ITEM, REMOVE_CART_ITEM, SHIPPING_INFO } from "./cart.action"

let initialState = {
    cartItems: localStorage.cartItems ? JSON.parse(localStorage.cartItems) : [],
    shippingInfo: localStorage.shippingInfo ? JSON.parse(localStorage.shippingInfo) : {}
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            const item = action.payload;

            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            )

            if(isItemExist){
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }

        case SHIPPING_INFO: 
            return {
                ...state,
                shippingInfo: action.payload
            }

        default:
            return state
    }
}