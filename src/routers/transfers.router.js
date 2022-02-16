const router = require ('express').Router()
const {getTransfers,
       getTransferById,
       deliver,
       receive} = require('../controllers/transfers.controller')

const {checkAuth,
       checkManager} = require('../utils/auth')

router.get('/', checkAuth, checkManager, getTransfers)
router.get('/:id', checkAuth, checkManager, getTransferById)
router.put('/deliver/:id', checkAuth, checkManager, deliver)
router.put('/receive/:id', checkAuth, checkManager, receive)


module.exports = router