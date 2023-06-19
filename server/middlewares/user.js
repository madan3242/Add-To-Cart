const jwt = require('jsonwebtoken');
const User = require('../models/user');

//JWT token verification
exports.isLoggedIn = async (req, res, next) => {
    if(!req.headers) {
        return res.status(401).json({
            error: 'Unauthorized Access'
        })
    }

    const token = req?.headers?.authorization?.split(" ")[1]

    if(!token) {
        return res.status(401).json({
            error: 'Login first to access this page'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
        return res.status(401).json({
            error: 'Unauthorized Access'
        })
    }

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
        next();
    }
}