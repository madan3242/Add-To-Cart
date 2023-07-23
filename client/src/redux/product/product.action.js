export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST'
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS'
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE'

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
    const {keyword, currentPage = 1, minPrice = 0, maxPrice = 250000, category, rating = 0} = filter
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCTS_REQUEST })
            let url = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${minPrice}&price[lte]=${maxPrice}&rating[gte]=${rating}`

            if(category) {
                url = `/products?category=${category}&keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}`
            }
            
            const response = await axios.get(`${API_URL}${url}`)
            console.log(response.data);
            dispatch({ type: PRODUCTS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: PRODUCTS_FAILURE, payload: error.message })
        }
    }
}
//Get All Products for admin
export const getAdminProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADMIN_PRODUCTS_REQUEST })
            const response = await axios.get(`${API_URL}/admin/products`)
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
//Get single product
const getOneProduct = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}/products/:id`)
        } catch (error) {
            
        }
    }
}