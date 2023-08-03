import axios from "axios"

const API_URL =  `http://localhost:8080/api/v1`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getApiKey = async(setStripeApiKey) => {
    try {
        const response = await axios.get(`${API_URL}/stripekey`)
        setStripeApiKey(response?.data?.stripeApikey)
    } catch (error) {
        setStripeApiKey(null)        
    }
}

export const stripePayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/payment`, paymentData, config)
        
    } catch (error) {
        
    }
}