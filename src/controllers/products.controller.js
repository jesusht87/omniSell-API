const productModel = require('../models/products.model')

const newProduct = async (req, res) => {
    try {
        const product = await productModel.create(
            {
                name: req.body.name,
                price: req.body.price,
                size: req.body.size,
                colour: req.body.colour
            }
        )

        res.json('Your product ' + product.name + ' has been added.')

    } catch (error) {
        res.status(500).send(error)
    }
}

function getAllProducts(req, res) {
    productModel.find().then(response => res.json(response)).catch((err) => handleError(err, res))
}

function getProductById(req, res) {
    productModel.find({ _id: req.params.id }).then(response => res.json(response)).catch((err) => handleError(err, res))
}

function updateProduct(req, res) {
    productModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function deleteProductById(req, res) {
    productDeleted = req.params.id
    productModel
        .remove({ _id: req.params.id })
        .then(response => res.json('The Product with ID ' + productDeleted + ' has been deleted.'))
        .catch(err => handleError(err, res))
}

module.exports = {
    newProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProductById
}