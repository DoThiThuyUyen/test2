const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const user = require('../models/user')

const verifyToken = asyncHandler(async(req, res, next) => {
    if(req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
            if(err) return res.status(401).json({
                success: false,
                massage: 'Invalid access token!'
            })
            req.user = decode
            next()
        })
    } else return res.status(401).json({
        success: false,
        massage: 'Require authentication!'
    })
})

const verifyAdmin = asyncHandler(async(req, res, next) => {
    const { isAdmin } = req.user  
    if(isAdmin) {
        next()
    } else return res.status(401).json({
        success: false,
        massage: 'Require admin authentication!'
    })
})

module.exports = { verifyToken, verifyAdmin }