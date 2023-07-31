const express = require('express');
const { 
    createOrder, 
    getSingleOrder, 
    getAllOrders, 
    adminAllOrders, 
    deleteOrder, 
    updateOrder
} = require('../controllers/orderController');
const { 
    isLoggedIn, 
    customRole 
} = require('../middlewares/user');

const router = express.Router();

router.route('/orders/new').post(createOrder)

router.route('/order/:id').get(isLoggedIn ,getSingleOrder)

router.route('/orders').get(isLoggedIn, getAllOrders)

router.route('/admin/orders').get(isLoggedIn, customRole("admin"), adminAllOrders)

router.route('/admin/orders/:id')
    .put(isLoggedIn, customRole("admin"), updateOrder)
    .delete(isLoggedIn, customRole("admin"), deleteOrder)

module.exports = router