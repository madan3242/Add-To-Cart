const AsyncErrors = require("../middlewares/asyncErrors");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.stripeSendApiKey = AsyncErrors(async (req, res, next) => {
    res.status(200).json({
        stripeApikey: process.env.STRIPE_API_KEY
    })
})

exports.processPayment = AsyncErrors(async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
        },
      });
          
      res.status(200).json({
        success: true,
        amount: req.body.amount,
        client_secret: paymentIntent.client_secret,
      })
})