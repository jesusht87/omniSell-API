const router = require('express').Router()
const {
    createStore,
    getAllStores,
    getStoreById,
    updateStore,
    deleteStoreById} = require('../controllers/stores.controller')
const {checkAuth,
    checkAdmin,
    checkManager} = require('../utils/auth')

router.get('/', checkAuth, getAllStores)
router.get('/:id', checkAuth, checkManager, getStoreById)
router.post('/', checkAuth, checkAdmin, createStore)
router.put('/:id', checkAuth, checkAdmin, updateStore)
router.delete('/:id', checkAuth, checkAdmin, deleteStoreById)
module.exports = router 