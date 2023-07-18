import { NEW_PRODUCT_FAILURE, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, PRODUCTS_FAILURE, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from "./product.action"

export const productsReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCTS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
    }
}

export const addProductReducer = (state = { product: {}}, action) => {
    switch (action.type) {
        case NEW_PRODUCT_REQUEST:
            return {
                loading: true
            }
        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case NEW_PRODUCT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}