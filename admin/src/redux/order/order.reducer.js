import { 
    ALL_ORDERS_REQUEST, 
    ALL_ORDERS_SUCCESS, 
    ALL_ORDERS_FAILURE, 
    CREATE_ORDER_REQUEST, 
    CREATE_ORDER_SUCCESS, 
    CREATE_ORDER_FAILURE,
    MY_ORDERS_REQUEST, 
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAILURE, 
    UPDATE_ORDER_REQUEST,
    DELETE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    DELETE_ORDER_SUCCESS,
    UPDATE_ORDER_FAILURE,
    DELETE_ORDER_FAILURE,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAILURE, 
    CLEAR_ERRORS,
} from "./order.action"

export const orderReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST: 
        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case CREATE_ORDER_SUCCESS:
        case UPDATE_ORDER_SUCCESS:
        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        case CREATE_ORDER_FAILURE:
        case UPDATE_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
        case ORDER_DETAILS_FAILURE:
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

export const ordersReducer = (state = { orders: [] }, action) => {
    switch(action.type){
        case MY_ORDERS_REQUEST:
        case ALL_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case MY_ORDERS_SUCCESS:
        case ALL_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }

        case MY_ORDERS_FAILURE:
        case ALL_ORDERS_FAILURE:
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