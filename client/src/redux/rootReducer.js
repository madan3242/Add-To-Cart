import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import { addProductReducer, productsReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
    auth: userReducer,
    // products: productsReducer
    addProduct: addProductReducer
})