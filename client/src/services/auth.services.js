import axios from "axios"
import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    SIGNUP_FAILURE, 
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
    UPDATE_USER_FAILURE, 
    UPDATE_USER_REQUEST, 
    UPDATE_USER_SUCCESS, 
    USER_LOGOUT
} from "../redux/users/user.action"
const API_URL =  `http://localhost:5000/api/v1`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const userLogin = (data, setIsLoggedIn, toggleLogin) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST })

            const response = await axios.post(`${API_URL}/login`, data, config)

            console.log(response);

            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            setIsLoggedIn(true)
            toggleLogin()

        } catch(error) {
            dispatch({ type: LOGIN_FAILURE, payload: error})
        }
    }
}

export const userSignup = (data, setIsLoggedIn, toggleLogin) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNUP_REQUEST })

            const response = await axios.post(`${API_URL}/signup`, data, config)

            console.log(response);

            dispatch({ type: SIGNUP_SUCCESS, payload: response.data })
            setIsLoggedIn(true)
            toggleLogin()

        } catch(error) {
            dispatch({ type: SIGNUP_FAILURE, payload: error})
        }
    }
}

export const userLogout = (setIsLoggedIn) => {
    return async (dispatch) => {
        dispatch({ type: USER_LOGOUT })
        const response = await axios.get(`${API_URL}/logout`)
        console.log(response);
        setIsLoggedIn(false)
    }
}

export const updateUserProfile = (data, setEdit) => {
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