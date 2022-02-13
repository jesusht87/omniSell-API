const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name of product is required.']
  },
  price: {
    type: Number,
    required: [true, 'Price is required. Please, insert price and try again.']
  },
  size: {
    type: String,
    required: [true, 'The size of the products are mandatory. Please, insert size for the product and try again.'],
  },
  colour: {
    type: String,
    required: [true, 'Colour of the products are mandatory. Please, insert colour and try again.']
  }
})

const productModel = mongoose.model('product',productSchema)

module.exports = productModel