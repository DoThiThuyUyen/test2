const Genre = require('../models/genre')
const asyncHandler = require('express-async-handler') 

module.exports = userController = {
    getAllGenre: asyncHandler(async(req,res) => { 
        const response = await Genre.find({})
        res.status(200).json(response)
    }), 
    getDetailGenre: asyncHandler(async(req,res) => {
        const {_id} = req.params
        console.log(_id)
        const response = await Genre.findOne({_id: _id})
        res.status(200).json(response)

    }), 
    create: asyncHandler(async(req, res) => {
        const newUser = await Genre.create( req.body )
            return res.status(200).json({
                success: newUser ? true : false,
                message: newUser ? 'Create is successfully!' : 'Something went wrong!'
            })
    }),
    update: asyncHandler(async(req,res) => {
        const {_id} = req.params
        if(_id) {
            const genre = await Genre.findByIdAndUpdate(_id, req.body, { new: true })
            return res.status(200).json({
                success: genre? true : false,
                message: genre? "Update successfully!": "Something went wrong!",
                response: genre? genre : "Genre not found" 
            })
        } else return res.status(401).json({
            success: false,
            message: "Update successfullyGenre needs to be authenticated to perform this function!"
        })
    }),

    delete: asyncHandler(async(req,res) => {
        const {_id} = req.params
        console.log(_id)
        const genre = await Genre.findByIdAndDelete(_id, { new: true })
        return res.status(200).json({
            success: genre? true : false,
            message: genre? "Delete genre successfully!": "Something went wrong!"
        })
    })

}
