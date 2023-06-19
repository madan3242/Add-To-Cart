import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./users/user.reducer";

export const rootReducer = combineReducers({
    auth: authReducer
})