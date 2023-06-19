import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, USER_LOGOUT } from "./user.action"

const initialState = {
    user: null,
    token: null,
    loading: false,
    isAuthinticated: false,
    errorMessage: null
}

const authReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case LOGIN_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS: 
            localStorage.setItem("token", payload.token)
            localStorage.setItem("user", JSON.stringify(payload.user))
            return {
                ...state,
                loading: false,
                user: payload.user,
                token: payload.token
            }
        case LOGIN_FAILURE: 
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }

        case SIGNUP_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS: 
            localStorage.setItem("token", payload.token)
            localStorage.setItem("user", JSON.stringify(payload.user))
            return {
                ...state,
                loading: false,
                user: payload.user,
                token: payload.token
            }
        case SIGNUP_FAILURE: 
            return {
                ...state,
                loading: false,
                errorMessage: payload.error
            }
        case USER_LOGOUT: 
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return {
                loading: false,
                user: null,
                token: null,
                isAuthinticated: false
            }
        default: return state
    }
}

export default authReducer;