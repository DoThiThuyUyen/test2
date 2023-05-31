const router = require('express').Router()
const genreControllers = require('../controllers/genreControllers')
const { verifyToken, verifyAdmin } = require('../middlewares/verify')

router.get('/', verifyToken, genreControllers.getAllGenre)
router.post('/create', verifyToken,verifyAdmin, genreControllers.create)

router.get('/detail/:_id', verifyToken, genreControllers.getDetailGenre)
router.put('/update/:_id', verifyToken, verifyAdmin, genreControllers.update)
router.delete('/:_id', [verifyToken, verifyAdmin], userController.delete)
module.exports = router