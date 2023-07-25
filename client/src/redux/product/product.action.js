export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST'
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS'
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE'

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE'

export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST'
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS'
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE'

export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST'
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS'
export const DELETE_REVIEW_FAILURE = 'DELETE_REVIEW_FAILURE'

export const ALL_REVIEWS_REQUEST = 'ALL_REVIEWS_REQUEST'
export const ALL_REVIEWS_SUCCESS = 'ALL_REVIEWS_SUCCESS'
export const ALL_REVIEWS_FAILURE = 'ALL_REVIEWS_FAILURE'

export const ADMIN_PRODUCTS_REQUEST = 'PRODUCTS_REQUEST'
export const ADMIN_PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS'
export const ADMIN_PRODUCTS_FAILURE = 'PRODUCTS_FAILURE'

export const NEW_PRODUCT_REQUEST = 'NEW_PRODUCT_REQUEST'
export const NEW_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS'
export const NEW_PRODUCT_FAILURE = 'NEW_PRODUCT_FAILURE'

export const UPDATE_PRODUCT_REQUEST = 'NEW_PRODUCT_REQUEST'
export const UPDATE_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_FAILURE = 'NEW_PRODUCT_FAILURE'

export const DELETE_PRODUCT_REQUEST = 'NEW_PRODUCT_REQUEST'
export const DELETE_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_FAILURE = 'NEW_PRODUCT_FAILURE'

import axios from "axios"
const API_URL =  `http://localhost:8080/api/v1`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
//Get All Products
export const getAllProducts = (filter) => {
    const {keyword, currentPage = 2, minPrice = 0, maxPrice = 250000, category = "", rating = 0} = filter
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCTS_REQUEST })

            let url = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${minPrice}&price[lte]=${maxPrice}&rating[gte]=${rating}`

            if(category) {
                url = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${minPrice}&price[lte]=${maxPrice}&category=${category}&rating[gte]=${rating}`
            }

            const response = await axios.get(`${API_URL}${url}`)
            console.log(response);
            dispatch({ type: PRODUCTS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: PRODUCTS_FAILURE, payload: error.message })
        }
    }
}
//Get single product
export const getOneProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_REQUEST })
            const response = await axios.get(`${API_URL}/products/${id}`)
            dispatch({ type: PRODUCT_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: PRODUCT_FAILURE, payload: error.message })
        }
    }
}
//Add review
export const addProductReview = (data, setAddReview) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADD_REVIEW_REQUEST })
            const response = await axios.post(`${API_URL}/review`, data, config)
            dispatch({ type: ADD_REVIEW_SUCCESS, payload: response.data })
            setAddReview(false);
        } catch (error) {
            dispatch({ type: ADD_REVIEW_FAILURE, payload: error.message })
        }
    } 
}
//Get All Products for admin
export const getAdminProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADMIN_PRODUCTS_REQUEST })
            const response = await axios.get(`${API_URL}/admin/products`)
            console.log(response.data);
            dispatch({ type: ADMIN_PRODUCTS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: ADMIN_PRODUCTS_FAILURE, payload: error.message })
        }
    }
}
//Create Product
export const createProduct = (data, setAddProduct) => {
    return async (dispatch) => {
        try {
            dispatch({ type: NEW_PRODUCT_REQUEST })
            const response = await axios.post(`${API_URL}/admin/products/add`, data, config)
            dispatch({ type: NEW_PRODUCT_SUCCESS, payload: response.data })
            setAddProduct(false)
        } catch (error) {
            dispatch({ type: NEW_PRODUCT_FAILURE, payload: error.message })
        }
    }
}
//Update product
export const updateProduct = (id, data) => {
    return async (dispatch) => {
        try {
            
        } catch (error) {
            
        }
    }
}
