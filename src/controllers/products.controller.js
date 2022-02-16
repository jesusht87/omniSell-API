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

const getAllProducts  = async (req, res) => {
    try {
        const product = await productModel.find()
        res.json(product)
    } catch (error) {
        res.status(500).send(error)
    }

}
const getProductById = async (req, res) => {
    try {
        const product = await productModel.find({ _id: req.params.id })
        res.json(product)
        
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await productModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.json(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteProductById = async (req, res) => {
    const productDeleted = req.params.id
    await productModel.remove({ _id: req.params.id })
    res.json('The Product with ID ' + productDeleted + ' has been deleted.')
}
        

module.exports = {
    newProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProductById
}