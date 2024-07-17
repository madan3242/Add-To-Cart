import axios from "axios"
import { API_URL } from "../../config"

export const ADD_CART_ITEM = "ADD_CART_ITEM"

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

export const SHIPPING_INFO = "SHIPPING_INFO"

export const addItemsToCart = (id, quantity) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`${API_URL}/products/${id}`)
        dispatch({
            type: ADD_CART_ITEM,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.photos[3].secure_url,
                stocks: data.product.stocks,
                quantity
            }
        })
        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    }
}

export const removeItemsFromCart = (id) => {
    return async (dispatch, getState) => {
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: id
        })

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    }
}

export const saveShippingInfo = (data) => {
    return async (dispatch, getState) => {
        dispatch({
            type: SHIPPING_INFO,
            payload: data
        })
        localStorage.setItem("shippingInfo", JSON.stringify(getState().cart.shippingInfo))
    }
}

