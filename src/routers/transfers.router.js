const router = require ('express').Router()
const {getTransfers,
       getTransferById,
       deliver,
       receive} = require('../controllers/transfers.controller')


router.get('/', getTransfers)
router.get('/:id', getTransferById)
router.put('/deliver/:id', deliver)
router.put('/receive/:id', receive)


module.exports = router