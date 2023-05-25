const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.isLoggedIn = async (req, res, next) => {
    const token = req.headers("Authorizaation").replace("Bearer ", "");

    if(!token) {
        return res.status(401).json({
            error: 'Login first to access this page'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
}

exports.customRole = (...roles) => {
    return async(req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(401).json({
                error: 'You are not allowed'
            })
        }
    }
}