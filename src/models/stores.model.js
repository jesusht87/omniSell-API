const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },

    location: {
        type: String,
        required: [true, 'Location required']
    },

    stock: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            amount: {
                type: Number,
                default: 0
            }
        }
    ],

    bestSellers: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            amount: {
                type: Number,
                default: 0
            }
        }
    ],
})

const storeModel = mongoose.model('store', storeSchema)

module.exports = storeModel