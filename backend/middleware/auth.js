const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

exports.isAuthenticated = async (req, res, next) => {
    try {
        const {token} = req.cookies
        if (!token) {
            res.status(401).json({
                message: 'You are not logged in'
            })
        }
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(decoded._id)
        next();
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}