const router = require('express').Router()
const {
    newOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrderById} = require('../controllers/orders.controller')
const {checkAuth,
    checkManager} = require('../utils/auth')

router.get('/', checkAuth, getAllOrders)
router.get('/:id', checkAuth, getOrderById)
router.post('/', checkAuth, checkManager, newOrder)
router.put('/:id', checkAuth, checkManager, updateOrder)
router.delete('/:id', checkAuth, checkManager, deleteOrderById)
module.exports = router 
