const router = require('express').Router()
const {
    newProduct,
    getAllProducts, 
    getProductById,
    updateProduct,
    deleteProductById
} = require('../controllers/products.controller')

router.post('/', newProduct)
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProductById)
module.exports = router 