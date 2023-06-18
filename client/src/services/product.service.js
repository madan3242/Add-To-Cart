import axios from "axios"
const API_URL =  `http://localhost:5000/api/v1`

const getAllProducts = () => {
    axios.get(`${API_URL}/products`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {return data})
    .catch(error => { return error})
}

const getProductByID = () => {
    axios.get(`${API_URL}/products/:id`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {return data})
    .catch(error => { return error})
}

export { getAllProducts, getProductByID }