import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./user.action"

const initialState = {
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST: {}
        case LOGIN_SUCCESS: {}
        case LOGIN_FAILURE: {}

        default: return state
    }
}

export default authReducer;