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
    password: {
        type: String,
        required: [true, 'Password required']
    },
    store: {
        required: true
    },
    role: {
        type: String,
        required: [true, 'Role required'],
        enum: ['admin', 'manager', 'employee']
    }
})

const storeModel = mongoose.model('store', storeSchema)

module.exports = storeModel