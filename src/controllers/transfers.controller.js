const transferModel = require('../models/transfers.model')
const storeModel = require('../models/stores.model')

const getTransfers = async (req, res) => {
  try {
    const transf = await transferModel.find()
    res.json(transf)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getTransferById = async (req, res) => {
  try {
    const transf = await transferModel.find({
      _id: req.params.id
    })
    res.json(transf)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deliver = async (req, res) => {
  try {
    if (req.body.status === 'Delivered') {
      const transfer = await transferModel.findById(req.params.id)
      .populate('orders')
      
      const store = await storeModel.findById(transfer.origin)
      
      transfer.orders.forEach(order => {
        order.orderContent.forEach(elem => {
          
          const storeProd = store.stock.filter(e => JSON.stringify(e.product) === JSON.stringify(elem.product))
          console.log(storeProd)
        })
      })
      
    }
  
}catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getTransfers,
  getTransferById,
  deliver
}