const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')


const createUser = async (req, res) => {
    try {
        const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
        const user = await userModel.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hashed_pwd,
            store: req.body.store,
            role: req.body.role
        })

        res.json({
            name: user.name,
            email: user.email
        })

    } catch (error) {
        res.status(500).send(error)
    }
}


const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.find()
        res.json(user)
        
} catch (error) {
    res.status(500).send(error)
}
}

const updateUser = async (req, res) => {
    try {
        const user = await userModel
            .findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
        res.json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await userModel.remove({
            _id: req.params.id
        })
        res.json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

const filterUsersByStore = async(req, res) => {
    try {
        const user = await userModel
        .find({
            "store": req.params.id
        })
        res.json(user)
    } catch (error) {
        
    }
       
}

module.exports = {
    createUser,
    getAllUsers,
    filterUsersByStore,
    updateUser,
    deleteUserById
}