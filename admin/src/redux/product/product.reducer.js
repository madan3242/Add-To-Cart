import { 
    ADD_REVIEW_FAILURE,
    ADD_REVIEW_REQUEST,
    ADD_REVIEW_SUCCESS,
    ADMIN_PRODUCTS_FAILURE, 
    ADMIN_PRODUCTS_REQUEST, 
    ADMIN_PRODUCTS_SUCCESS, 
    CLEAR_ERRORS, 
    NEW_PRODUCT_FAILURE, 
    NEW_PRODUCT_REQUEST, 
    NEW_PRODUCT_SUCCESS, 
    PRODUCTS_FAILURE, 
    PRODUCTS_REQUEST, 
    PRODUCTS_SUCCESS, 
    PRODUCT_FAILURE, 
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS
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
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                totalProductCount: action.payload.totalProductCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductNumber: action.payload.filteredProductNumber,
            }
        case ADMIN_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        case PRODUCTS_FAILURE:
        case ADMIN_PRODUCTS_FAILURE:
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

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch(action.type){
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case PRODUCT_FAILURE:
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

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const addReviewReducer = (state = { review: {} }, action) => {
    switch(action.type){
        case ADD_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_REVIEW_SUCCESS:
            return {
                ...state,
                loading: true,
                review: action.payload
            }
        case ADD_REVIEW_FAILURE:
            return {
                ...state,
                loading: true,
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