const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        default: "https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp"
    },
    favorit_movie: {
        type: [{type: mongoose.Types.ObjectId, ref: 'Movies'}]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)