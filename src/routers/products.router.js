const router = require('express').Router()
const {
    newProduct,
    getAllProducts, 
    getProductById,
    updateProduct,
    deleteProductById
} = require('../controllers/products.controller')
const {checkAuth,
    checkAdmin} = require('../utils/auth')

router.get('/', checkAuth, getAllProducts)
router.get('/:id', checkAuth, checkAdmin, getProductById)
router.post('/', checkAuth, checkAdmin, newProduct)
router.put('/:id', checkAuth, checkAdmin, updateProduct)
router.delete('/:id', checkAuth, checkAdmin, deleteProductById)
module.exports = router 