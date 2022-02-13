const transferModel = require('../models/transfers.model')

const getTransfers = async (req, res) => {
  try {
    const transf = await transferModel.find()
    res.json(transf)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getTransferById = async (req,res) => {
  try {
    const transf = await transferModel.find({_id : req.params.id})
    res.json(transf)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deliver = async (req, res) => {
  try {
    const transf = await transferModel.find({_id : req.params.id})
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {getTransfers,
                getTransferById,
                deliver}