const storeModel = require('../models/stores.model')

const createStore = async (req, res) => {
    try {
        const store = await storeModel.create({
            name: req.body.name,
            location: req.body.location,
            stock: req.body.stock,
            bestSellers: req.body.bestSellers
        })
        res.json({
            name: store.name,
            location: store.location
        })

    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllStores = async (req, res) => {
    try {
        const stores = await storeModel.find()
        res.json(stores)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getStoreById = async (req, res) => {
    try {
        const store = await storeModel.find({
            _id: req.params.id
        })
        res.json(store)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateStore = async (req, res) => {
    try {
        const store = await storeModel
            .findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
        res.json(store)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteStoreById = async (req, res) => {
    try {
        storeDeleted = req.params.id
        await storeModel.remove({
            _id: req.params.id
        })
        res.json('The Store with ID ' + storeDeleted + ' has been deleted.')
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createStore,
    getAllStores,
    getStoreById,
    updateStore,
    deleteStoreById
}