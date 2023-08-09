const AsyncErrors = require('../middlewares/asyncErrors');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');

exports.createOrder = AsyncErrors(async(req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        taxAmount,
        shippingAmount,
        totalAmount
    } = req.body

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        taxAmount,
        shippingAmount,
        totalAmount,
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        message: "Order placed successfully",
        order
    })
})

exports.getSingleOrder = AsyncErrors(async(req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    )
    
    if(!order){
        return next(new ErrorHandler("No order found", 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

exports.getAllOrders = AsyncErrors(async(req, res, next) => {
    const orders = await Order.find({ user: req.user._id })

    if(!orders){
        return next(new ErrorHandler("No orders found", 404))
    }

    res.status(200).json({
        success: true,
        orders
    })
})

exports.adminAllOrders = AsyncErrors(async(req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalAmount
    })

    res.status(200).json({
        success: true,
        orders,
        totalAmount
    })
})

exports.updateOrder = AsyncErrors(async(req, res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler("No order found", 404))
    }

    if(order.orderStatus === "delivered") {
        return next(new ErrorHandler("Order already delivered", 401))
    }

    order.orderStatus = req.body.orderStatus;

    order.orderItems.forEach(async(prod) => {
        await updateProductStocks(prod.product, prod.qunatity)
    })

    await order.save();

    res.status(200).json({
        success: true,
        order
    })
})

exports.deleteOrder = AsyncErrors(async(req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if(!order){
        return next(new ErrorHandler("No order found", 404))
    }

    res.status(200).json({
        success: true,
        message: "Order deleted successfully"
    })
})

async function updateProductStocks(productId, quantity){
    const product = await Product.findById(productId);

    product.stocks = product.stocks - quantity;

    await product.save({ validateBeforeSave: false })
}