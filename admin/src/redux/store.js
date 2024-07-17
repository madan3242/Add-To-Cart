import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'

import { userReducer, allUsersReducer } from "./user/user.reducer";
import { addProductReducer, productDetailsReducer, productsReducer } from "./product/product.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { orderReducer, ordersReducer } from "./order/order.reducer";

const middlewares = [thunk, logger]

export const store = configureStore({
    reducer: {
        auth: userReducer,
        users: allUsersReducer,
        products: productsReducer,
        productDetails: productDetailsReducer,
        addProduct: addProductReducer,
        cart: cartReducer,
        order: orderReducer,
        orders: ordersReducer
    }
}, composeWithDevTools(applyMiddleware(...middlewares)))