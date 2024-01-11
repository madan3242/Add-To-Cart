import { signupUser } from "../api/users";
import { createSlice, createAsyncThunk } from("@reduxjs/toolkit");

const API_URL =  `http://localhost:${import.meta.env.VITE_API_URL}/api/v1`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const login = createAsyncThunk('/auth/signup', async () => {
    try {
        const response = await signupUser(user);
        return response;
    } catch (error) {
        return error.message
    }
})

const initialState ={
    user: localStorage.user ? JSON.parse(localStorage.user) : null,
    token: null,
    loading: false,
    isAuthenticated: false,
    error: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signupRequest: (state, action) => {
            state.loading = true
        },
        signupSuccess: (state, action) => {
            state.loading = false
            state.isAuthenticated = true
            state.user = action.payload
            state.token = action.payload
        },
        signupFailure: (state, action) => {
            state.loading = false
            state.isAuthenticated = false
            state.error = action.payload
        },
        loginRequest: (state, action) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.isAuthenticated = true
            state.user = action.payload
            state.token = action.payload
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.isAuthenticated = false
            state.error = action.payload
        },
        logout: (state, action) => {
            state.loading = false
            state.isAuthenticated = false
            state.user = null
            state.token = false
            state.error = null
        }
    }
})

export const authReducer = authSlice.reducer;
export const { signupRequest, signupSuccess, signupFailure, loginRequest, loginSuccess, loginFailure } = authSlice.actions;