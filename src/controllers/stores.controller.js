const storeModel = require('../models/stores.model')

const createStore = async (req, res) => {
    try {
        const store = await storeModel.create(
            {
                name: req.body.name,
                location: req.body.location
                // stock: [
                //     {
                //         product: req.body.stock.product,
                //         amount: req.body.stock.amount
                //     }
                // ],
                // bestSellers: [
                //     {
                //         product: req.body.stock.product,
                //         amount: req.body.stock.amount
                //     }
                // ],

            }
        )

        res.json({
            name: store.name,
            location: store.location
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

function getAllStores(req, res) {
    storeModel.find().then(response => res.json(response)).catch((err) => handleError(err, res))
}

function getStoreById(req, res) {
    storeModel.find({ _id: req.params.id }).then(response => res.json(response)).catch((err) => handleError(err, res))
}

function updateStore(req, res) {
    storeModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function deleteStoreById(req, res) {
    storeDeleted = req.params.id
    storeModel
        .remove({ _id: req.params.id })
        .then(response => res.json('The Store with ID ' + storeDeleted + ' has been deleted.'))
        .catch(err => handleError(err, res))
}

module.exports = {
    createStore,
    getAllStores,
    getStoreById,
    updateStore,
    deleteStoreById
}