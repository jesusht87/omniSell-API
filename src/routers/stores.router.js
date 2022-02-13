const router = require('express').Router()
const {
    createStore,
    getAllStores,
    getStoreById,
    updateStore,
    deleteStoreById, 
} = require('../controllers/stores.controller')

router.post('/', createStore)
router.get('/', getAllStores)
router.get('/:id', getStoreById)
router.put('/:id', updateStore)
router.delete('/:id', deleteStoreById)
module.exports = router 