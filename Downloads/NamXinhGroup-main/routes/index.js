const userRouter = require('../routes/userRoute')
const genreRouter = require('../routes/genreRoute')
const {notFound, errorHandler} = require('../middlewares/errorHandler')

const initRoute = (app) => {
    app.use('/api/v1/users', userRouter)
    app.use('/api/v1/genre', genreRouter)
    app.use(notFound)
    app.use(errorHandler)
}

module.exports = initRoute