import axios from "axios"
import { API_URL, config } from "../config"

export const getApiKey = async(setStripeApiKey) => {
    try {
        const response = await axios.get(`${API_URL}/stripekey`)
        setStripeApiKey(response?.data?.stripeApikey)
    } catch (error) {
        setStripeApiKey(null)        
    }
}

export const stripePayment = async (amount, setClientSecret) => {
    try {
        amount = Math.round(amount * 100)
        const response = await axios.post(`${API_URL}/payment`, { amount }, config)
        setClientSecret(response?.data?.client_secret)
    } catch (error) {
        return error.message
    }
}