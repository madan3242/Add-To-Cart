import axios from "axios";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const ALL_USERS_REQUEST = 'ALL_USERS_REQUEST'
export const ALL_USERS_SUCCESS = 'ALL_USERS_SUCCESS'
export const ALL_USERS_FAILURE = 'ALL_USERS_FAILURE'

export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const API_URL =  `http://localhost:8080/api/v1`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
//User signup
export const signup = (data, setIsAuthenticated, toggleLogin, setLoading) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNUP_REQUEST })
            setLoading(true)
            const response = await axios.post(`${API_URL}/signup`, data, config)
            dispatch({ type: SIGNUP_SUCCESS, payload: response.data })
            setIsAuthenticated(true)
            setLoading(false)
            toggleLogin()
        } catch(error) {
            dispatch({ type: SIGNUP_FAILURE, payload: error})
            setLoading(false)
            setIsAuthenticated(false)
        }
    }
}
//User login
export const login = (data, setIsAuthenticated, toggleLogin, setLoading) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST })
            setLoading(true)
            const response = await axios.post(`${API_URL}/login`, data, config)
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            setIsAuthenticated(true)
            setLoading(false)
            toggleLogin()
        } catch(error) {
            dispatch({ type: LOGIN_FAILURE, payload: error})
            setLoading(false)
            setIsAuthenticated(false)
        }
    }
}
//User logout
export const logout = (setIsAuthenticated) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGOUT_REQUEST })
            const response = await axios.get(`${API_URL}/logout`)
            dispatch({ type: LOGOUT_SUCCESS })
            console.log(response);
            setIsAuthenticated(false)
        } catch (error) {
            dispatch({ type: LOGOUT_FAILURE })
        }
    }
}
//Update profile
export const updateProfile = (data, setEdit) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_USER_REQUEST })

            const response = await axios.put(`${API_URL}/updateprofile`, data, config)
            dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data})
            setEdit(true)
            console.log(response);
        } catch (error) {
            dispatch({ type: UPDATE_USER_FAILURE, payload: error.message })
        }
    }
}
//Admin get all users
export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_USERS_REQUEST })
            const response = await axios.get(`${API_URL}/admin/users`)
            dispatch({ type: ALL_USERS_SUCCESS, payload: response?.data?.users})
        } catch (error) {
            dispatch({ type: ALL_USERS_FAILURE, payload: error.message })
        }
    }
}