const mongoose = require('mongoose')

const transferSchema = new mongoose.Schema({
  origin : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'store',
    required: [true, "please specify origin"],
  },
  destination : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'store',
    required: [true, "please specify destination"],
  },
  orders : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order',
  }],
  status: {
    type: String,
    enum:['Not Prepared', 'Delivered', 'Received'],
    default: 'Not Prepared'
  }
})


const transferModel = mongoose.model('transfer', transferSchema)

module.exports = transferModel