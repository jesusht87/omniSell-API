const orderModel = require('../models/orders.model')
const transferModel = require('../models/transfers.model')

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
        
        var transfer = await transferModel.findOne({origin : order.origin,destination : order.destination}) || null
        if(transfer === null){
            transfer = await transferModel.create({
                origin : order.origin,
                destination : order.destination,
                orders : [],
                status : 'Not Prepared'
            })
        }        

        order.orderContent.forEach(e => {transfer.orders.push(e)})
        console.log(transfer.orders)
        await transfer.save()
        res.send('Congrats! Your order between ' + order.origin + ' and ' + order.destination + ' have been placed.')

    } catch (error) {
        console.log(error)
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