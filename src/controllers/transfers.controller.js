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

    const transfer = await transferModel.findById(req.params.id).populate('orders')

    const store = await storeModel.findById(transfer.origin)

    transfer.orders.forEach(async order => {
      for (let i = 0; i < order.orderContent.length; i++) {

        let content = order.orderContent[i]

        const [storeProd] = store.stock.filter(s => JSON.stringify(s.product) === JSON.stringify(content.product))

        if (storeProd.amount >= content.amount) {

          storeProd.amount -= content.amount
          await store.save()

        }
      }

    })
    transfer.status = 'Delivered'
    res.send(transfer)

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

const receive = async (req, res) => {
  try {

    const transfer = await transferModel.findById(req.params.id).populate('orders')

    const store = await storeModel.findById(transfer.destination)

    transfer.orders.forEach(async order => {
      for (let i = 0; i < order.orderContent.length; i++) {

        let content = order.orderContent[i]

        const [storeProd] = store.stock.filter(s => JSON.stringify(s.product) === JSON.stringify(content.product))


        storeProd.amount += content.amount
        await store.save()

      }

    })
    transfer.status = 'Received'
    res.send(transfer)

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

module.exports = {
  getTransfers,
  getTransferById,
  deliver,
  receive
}