import axios from "axios"
import { 
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    SIGNUP_FAILURE, 
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
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

export const viewProfile = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_USER_REQUEST})
            const response = await axios.get('/viewprofile')

            dispatch({ type: GET_USER_SUCCESS, payload: response.data})

        } catch (error) {
            dispatch({ type: GET_USER_FAILURE, payload: error.message})
        }
    }
}

export const updateProfile = (data) => {
    return async () => {
        try {
            const response = await axios.post('/updateprofile', data, config)

            console.log(response);
            viewProfile()
        } catch (error) {
            
        }
    }
}