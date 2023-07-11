const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AsyncErrors = require('./asyncErrors');
const ErrorHandler = require('../utils/errorHandler');

//JWT token verification
exports.isLoggedIn = AsyncErrors(async (req, res, next) => {
    const token =  req?.cookies?.token || req?.headers?.authorization?.split(" ")[1]

    if(!token) {
        return next(new ErrorHandler('Login first to access this page', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
        return next(new ErrorHandler('Unauthorized Access', 401))
    }

    req.user = await User.findById(decoded.id);
    next();
})

//Custom Role Middleware
exports.customRole = (...roles) => {
    return async(req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler('You are not allowed', 403))
        }
        next();
    }
}