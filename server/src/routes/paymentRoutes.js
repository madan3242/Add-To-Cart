const express = require('express');

const { 
    stripeSendApiKey, 
    processPayment 
} = require('../controllers/paymentController');
const { isLoggedIn } = require('../middlewares/user');

const router = express.Router();

router.route('/stripekey').get(isLoggedIn, stripeSendApiKey)

router.route('/payment').post(isLoggedIn , processPayment)

module.exports = router