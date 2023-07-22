import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, allUsersReducer } from "./user/user.reducer";
import { addProductReducer, productsReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
    auth: userReducer,
    users: allUsersReducer,
    products: productsReducer,
    addProduct: addProductReducer
})