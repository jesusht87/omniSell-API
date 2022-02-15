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

    const transfer = await transferModel.findById(req.params.id)
      .populate('orders')


    const store = await storeModel.findById(transfer.origin)

    const stockErrors = []

    transfer.orders.forEach(order => {
      order.orderContent.forEach( async(content) => {

        const [storeProd] = store.stock.filter(s => JSON.stringify(s.product) === JSON.stringify(content.product))

        console.log(storeProd.product)

        // if (storeProd.amount < content.amount) {
        //   stockErrors.push({
        //     order: order._id,
        //     msg: `Order amount : ${content.amount}, stock amount : ${storeProd.amount}`
        //   })
        // }
        // else if (storeProd.product === undefined) {
        //   stockErrors.push({
        //     order: order._id,
        //     msg: `${content.product} not available in store`
        //   })
        // } else {
        //   storeProd.amount -= content.amount
        //   await store.save()
        // }

        //if not, cancel order, send a message, and continue loop
        

        
      })

    })
    console.log(stockErrors)
    
    res.send('Todo bien')
  } catch (error) {
    res.status(500).send(error)
  }
}
module.exports = {
  getTransfers,
  getTransferById,
  deliver
}