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

const API_URL =  `http://localhost:8080/api/v1`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const signup = (data, setIsAuthenticated, toggleLogin) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNUP_REQUEST })
            const response = await axios.post(`${API_URL}/signup`, data, config)
            console.log(response);
            dispatch({ type: SIGNUP_SUCCESS, payload: response.data })
            setIsAuthenticated(true)
            toggleLogin()
        } catch(error) {
            dispatch({ type: SIGNUP_FAILURE, payload: error})
            setIsAuthenticated(false)
        }
    }
}

export const login = (data, setIsAuthenticated, toggleLogin) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST })
            const response = await axios.post(`${API_URL}/login`, data, config)
            console.log(response);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            setIsAuthenticated(true)
            toggleLogin()
        } catch(error) {
            dispatch({ type: LOGIN_FAILURE, payload: error})
            setIsAuthenticated(false)
        }
    }
}

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