import axios from "axios"

const API_URL = `http://localhost:${import.meta.env.VITE_API_URL}/api/v1`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signupUser = async (dispatch) => {
    try {
        dispatch()
        const response = await axios.post(`${API_URL}/signup`, data, config);
        return response.data;
    } catch (error) {
        return error?.message;
    }
}