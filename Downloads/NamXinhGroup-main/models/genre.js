const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    genre_movie: {
        type: [{type: mongoose.Types.ObjectId, ref: 'Movies'}],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model('Genre', GenreSchema)