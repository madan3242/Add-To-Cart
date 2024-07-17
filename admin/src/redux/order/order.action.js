import axios from "axios"
import { API_URL, config } from "../../config"

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST"
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS"
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE"

export const MY_ORDERS_REQUEST = "MY_ORDERS_REQUEST"
export const MY_ORDERS_SUCCESS = "MY_ORDERS_SUCCESS"
export const MY_ORDERS_FAILURE = "MY_ORDERS_FAILURE"

export const ALL_ORDERS_REQUEST = "ALL_ORDERS_REQUEST"
export const ALL_ORDERS_SUCCESS = "ALL_ORDERS_SUCCESS"
export const ALL_ORDERS_FAILURE = "ALL_ORDERS_FAILURE"

export const UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST"
export const UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS"
export const UPDATE_ORDER_FAILURE = "UPDATE_ORDER_FAILURE"

export const DELETE_ORDER_REQUEST = "DELETE_ORDER_REQUEST"
export const DELETE_ORDER_SUCCESS = "DELETE_ORDER_SUCCESS"
export const DELETE_ORDER_FAILURE = "DELETE_ORDER_FAILURE"

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST"
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS"
export const ORDER_DETAILS_FAILURE = "ORDER_DETAILS_FAILURE"

export const CLEAR_ERRORS = 'CLEAR_ERRORS'

//Create Order
export const createOrder = (order, navigate) => {
    return async (dispatch) => {
        try {
            console.log(order);
            dispatch({ type: CREATE_ORDER_REQUEST })
            const response = await axios.post(`${API_URL}/orders/new`, order, config);
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data })
            navigate('/order/success')
        } catch (error) {
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message })
        }
    }
}
//My orders
export const myOrders = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: MY_ORDERS_REQUEST })
            const response = await axios.get(`${API_URL}/orders`);
            dispatch({ type: MY_ORDERS_SUCCESS, payload: response.data })

        } catch (error) {
            dispatch({ type: MY_ORDERS_FAILURE, payload: error.message })
        }
    }
}
//get order details
export const orderDetails = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_DETAILS_REQUEST })
            const response = await axios.get(`${API_URL}/orders/${id}`);
            dispatch({ type: ORDER_DETAILS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: ORDER_DETAILS_FAILURE, payload: error.message })
        }
    }
}

//Admin orders
export const adminOrders = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_ORDERS_REQUEST })
            const response = await axios.get(`${API_URL}/admin/orders`);
            dispatch({ type: ALL_ORDERS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: ALL_ORDERS_FAILURE, payload: error.message })
        }
    }
}
//Update order
export const updateOrder = (id, order, setEdit) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_ORDER_REQUEST })
            const response = await axios.put(`${API_URL}/admin/orders/${id}`, order, config);
            dispatch({ type: UPDATE_ORDER_SUCCESS, payload: response.data })
            setEdit(false)
        } catch (error) {
            dispatch({ type: UPDATE_ORDER_FAILURE, payload: error.message })
        }
    }
}
//Delete order
export const deleteOrder = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_ORDER_REQUEST })
            const response = await axios.delete(`${API_URL}/admin/orders/${id}`);
            dispatch({ type: UPDATE_ORDER_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: UPDATE_ORDER_FAILURE, payload: error.message })
        }
    }
}

//Clearing the errors
export const clearErrors = () => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }
}