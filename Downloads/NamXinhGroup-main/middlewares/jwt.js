const jwt = require('jsonwebtoken')

const generateAccessToken  = (uid, isAdmin) => jwt.sign({_id: uid, isAdmin}, process.env.JWT_SECRET_KEY, { expiresIn: '2d' })
const generateRefreshToken  = (uid) => jwt.sign({_id: uid}, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })

module.exports = {
    generateAccessToken,
    generateRefreshToken
}