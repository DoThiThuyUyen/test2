const router = require('express').Router()
const userController = require('../controllers/userControllers')
const { verifyToken, verifyAdmin } = require('../middlewares/verify')

router.get('/', [verifyToken, verifyAdmin], userController.getAllUser)
router.get('/current', verifyToken, userController.getCurrentUser)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.put('/update', verifyToken, userController.update)
router.get('/refreshtoken', userController.refreshAccessToken)
router.get('/logout', userController.logout)
router.delete('/:id', [verifyToken, verifyAdmin], userController.delete)
module.exports = router