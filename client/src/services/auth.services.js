import axios from "axios"
const API_URL =  `http://localhost:5000/api/v1`

const login = (data) => {
    axios.post(`${API_URL}/login`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {return data})
    .catch(error => { return error})
}

const signup = (data) => {
    axios.post(`${API_URL}/signup`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {return data})
    .catch(error => { return error})
}

const logout = () => {
    axios.get(`${API_URL}/logout`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {return data})
    .catch(error => { return error})
}

export { login, logout, signup}