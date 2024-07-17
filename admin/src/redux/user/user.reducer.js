import { 
    ADMIN_UPDATE_USER_FAILURE,
    ADMIN_UPDATE_USER_REQUEST,
    ADMIN_UPDATE_USER_SUCCESS,
    ALL_USERS_FAILURE,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    CLEAR_ERRORS,
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGOUT_FAILURE, 
    LOGOUT_REQUEST, 
    LOGOUT_SUCCESS, 
    RESET_PASSWORD_FAILURE, 
    RESET_PASSWORD_REQUEST, 
    RESET_PASSWORD_SUCCESS, 
    SIGNUP_FAILURE, 
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
    UPDATE_USER_FAILURE, 
    UPDATE_USER_REQUEST, 
    UPDATE_USER_SUCCESS, 
} from "./user.action"

const initialState = {
    user: localStorage.user ? JSON.parse(localStorage.user) : null,
    token: null,
    loading: false,
    isAuthenticated: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case LOGIN_REQUEST: 
        case SIGNUP_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS: 
        case SIGNUP_SUCCESS:
            localStorage.setItem("token", payload.token)
            localStorage.setItem("user", JSON.stringify(payload.user))
            return {
                ...state,
                loading: false,
                user: payload.user,
                token: payload.token,
                isAuthenticated: true,
            }
        case LOGIN_FAILURE: 
        case SIGNUP_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
                isAuthenticated: false,
            }
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_SUCCESS:
            localStorage.setItem("user", JSON.stringify(payload.user))
            return {
                ...state,
                loading: false,
                user: payload.user,
                isAuthenticated: true,
            }
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload.error,
                isAuthenticated: false,
            }
        
        case LOGOUT_SUCCESS: 
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return {
                ...state,
                loading: false,
                user: null,
                token: null,
                isAuthenticated: false
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        
        default: return state
    }
}

export const profileReducer = (state = { user: {} }, action) => {
    switch(action.type){
        case UPDATE_USER_REQUEST:
        case RESET_PASSWORD_REQUEST:
        case ADMIN_UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_SUCCESS:
        case RESET_PASSWORD_SUCCESS:
        case ADMIN_UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                user: action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null
            }
        case UPDATE_USER_FAILURE:
        case RESET_PASSWORD_FAILURE:
        case ADMIN_UPDATE_USER_FAILURE:
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        
        default: return state
        
    }
}

export const allUsersReducer = (state = { users: [] }, action) => {
    switch(action.type){
        case ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case ALL_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
