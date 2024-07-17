import axios from "axios";
import { API_URL, config } from "../../config";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const UPDATE_PASSWORD_REQUEST = "UPDATE_PASSWORD_REQUEST";
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_FAILURE = "UPDATE_PASSWORD_FAILURE";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const ALL_USERS_REQUEST = 'ALL_USERS_REQUEST';
export const ALL_USERS_SUCCESS = 'ALL_USERS_SUCCESS';
export const ALL_USERS_FAILURE = 'ALL_USERS_FAILURE';

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const ADMIN_UPDATE_USER_REQUEST = "ADMIN_UPDATE_USER_REQUEST";
export const ADMIN_UPDATE_USER_SUCCESS = "ADMIN_UPDATE_USER_SUCCESS";
export const ADMIN_UPDATE_USER_FAILURE = "ADMIN_UPDATE_USER_FAILURE";

export const CLEAR_ERRORS = 'CLEAR_ERRORS'

//User signup
export const signup = (data, setLoading, navigate, toast) => {
    console.log(data);
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNUP_REQUEST })
            setLoading(true)
            const response = await axios.post(`${API_URL}/signup`, data, config)
            dispatch({ type: SIGNUP_SUCCESS, payload: response?.data })
            setLoading(false)
            navigate('/admin/')
            toast.success("Signup Successful")
        } catch(error) {
            dispatch({ type: SIGNUP_FAILURE, payload: error?.message})
            setLoading(false)
            toast.error(error?.response?.data?.message)
        }
    }
}
//User login
export const login = (data, setLoading, navigate, toast) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST })
            setLoading(true)
            const response = await axios.post(`${API_URL}/login`, data, config)
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            setLoading(false)
            navigate('/admin/')
            toast.success("Login Successful")
        } catch(error) {
            console.log(error);
            dispatch({ type: LOGIN_FAILURE, payload: error?.response?.data?.message })
            setLoading(false)
            toast.error(error?.response?.data?.message)
        }
    }
}
//User logout
export const logout = (navigate, setIsAuthenticated) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGOUT_REQUEST })
            const response = await axios.get(`${API_URL}/logout`)
            dispatch({ type: LOGOUT_SUCCESS })
            navigate('/login')
            setIsAuthenticated(false)
        } catch (error) {
            dispatch({ type: LOGOUT_FAILURE, payload: error.message })
        }
    }
}
//Update profile
export const updateProfile = (data, setEdit, toast, setLoading) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_USER_REQUEST });
            setLoading(true);
            const response = await axios.put(`${API_URL}/updateprofile`, data, config);
            dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data});
            toast.success("Profile updated");
            setEdit(false)
            setLoading(false);
        } catch (error) {
            dispatch({ type: UPDATE_USER_FAILURE, payload: error.message })
            toast.error(error.response.data.message)
            setLoading(false);
        }
    }
}
//update password
export const updatePassword = (passwords, toggleChangePassword, setLoading) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_PASSWORD_REQUEST });
            setLoading(true);
            const response = await axios.put(`${API_URL}/changepassword`, passwords, config);
            dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: response.data });
            setLoading(false);
            toggleChangePassword();
        } catch (error) {
            dispatch({ type: UPDATE_PASSWORD_FAILURE, payload: error.message })
            setLoading(false);
        }
    }
}
//Forgot password
export const forgotPassword = (email, setLoading) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FORGOT_PASSWORD_REQUEST })
            setLoading(true)
            const response = await axios.post(`${API_URL}/forgotpassword`, { email })
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response.data })
            setLoading(false)
        } catch (error) {
            dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error.message })
            setLoading(false)
        }
    }
}
//Reset password
export const resetPassword = (token, passwords, setLoading, navigate) => {
    return async (dispatch) => {
        try {
            
            dispatch({ type: RESET_PASSWORD_REQUEST })
            setLoading(true);
            const response = await axios.put(`${API_URL}/password/reset/${token}`, passwords, config)
            console.log(response);
            dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data })
            setLoading(false);
            navigate("/login");
        } catch (error) {
            dispatch({ type: RESET_PASSWORD_FAILURE, payload: error.message })
            setLoading(false);
        }
    }
}

//Admin get all users
export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_USERS_REQUEST })
            const response = await axios.get(`${API_URL}/admin/users`)
            dispatch({ type: ALL_USERS_SUCCESS, payload: response?.data?.users})
        } catch (error) {
            dispatch({ type: ALL_USERS_FAILURE, payload: error.message })
        }
    }
}
//Admin delete user
export const adminDeleteUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_USER_REQUEST })
            const response = await axios.delete(`${API_URL}/admin/users/${id}`)
            dispatch({ type: DELETE_USER_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({ type: DELETE_USER_FAILURE, payload: error.message })
        }
    }
}
//Admin update user
export const adminUpdateUser = (id, data, setEdit) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADMIN_UPDATE_USER_REQUEST })
            const response = await axios.put(`${API_URL}/admin/users/${id}`, data, config)
            dispatch({ type: ADMIN_UPDATE_USER_SUCCESS, payload: response.data})
            setEdit(false)
        } catch (error) {
            dispatch({ type: ADMIN_UPDATE_USER_FAILURE, payload: error.message })
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