const router = require ('express').Router()
const {getTransfers,
       getTransferById,
       deliver} = require('../controllers/transfers.controller')


router.get('/', getTransfers)
router.get('/:id', getTransferById)
router.put('/:id', deliver)


module.exports = router