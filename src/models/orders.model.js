const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'The user that is creating the order is required.']
    },

    orderContent: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            amount: {
                type: Number,
                default: 0,
                required: true
            }
        }
    ],

    transfer: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },

    origin: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'store',
        required: true
      }, 

    destination: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'store',
        required: true
      }, 

})

const orderModel = mongoose.model('order', orderSchema)

module.exports = orderModel