const orderModel = require('../models/orders.model')

const newOrder = async (req, res) => {
    try {
        const order = await orderModel.create(
            {
                user: req.body.user,
                orderContent: req.body.orderContent,
                origin: req.body.origin,
                destination: req.body.destination
            }
        )

        res.json('Congrats! Your order between ' + order.origin + ' and ' + order.destination + ' have been placed.')

    } catch (error) {
        res.status(500).send(error)
    }
}

function getAllOrders(req, res) {
    orderModel.find().then(response => res.json(response)).catch((err) => error(err, res))
}

function getOrderById(req, res) {
    orderModel.find({ _id: req.params.id }).then(response => res.json(response)).catch((err) => error(err, res))
}

function updateOrder(req, res) {
    orderModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => error(err, res))
}

function deleteOrderById(req, res) {
    orderDeleted = req.params.id
    orderModel
        .remove({ _id: req.params.id })
        .then(response => res.json('The order with ID ' + orderDeleted + ' has been deleted.'))
        .catch(err => error(err, res))
}

module.exports = {
    newOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrderById
}