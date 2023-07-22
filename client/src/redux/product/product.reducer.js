import { 
    ADMIN_PRODUCTS_FAILURE, 
    ADMIN_PRODUCTS_REQUEST, 
    ADMIN_PRODUCTS_SUCCESS, 
    NEW_PRODUCT_FAILURE, 
    NEW_PRODUCT_REQUEST, 
    NEW_PRODUCT_SUCCESS, 
    PRODUCTS_FAILURE, 
    PRODUCTS_REQUEST, 
    PRODUCTS_SUCCESS 
} from "./product.action"

export const productsReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCTS_REQUEST:
        case ADMIN_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_SUCCESS:
        case ADMIN_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case PRODUCTS_FAILURE:
        case ADMIN_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
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