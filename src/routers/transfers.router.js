const router = require ('express').Router()
const {getTransfers,
       getTransferById} = require('../controllers/transfers.controller')


router.get('/', getTransfers)
router.get('/:id', getTransferById)


module.exports = router