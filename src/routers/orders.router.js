const router = require('express').Router()
const {
    newOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrderById 
} = require('../controllers/orders.controller')

router.post('/', newOrder)
router.get('/', getAllOrders)
router.get('/:id', getOrderById)
router.put('/:id', updateOrder)
router.delete('/:id', deleteOrderById)
module.exports = router 




