const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')


const createUser = async (req, res) => {
    try {
        const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
        const user = await userModel.create(
            {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: hashed_pwd,
                store: req.body.store,
                role: req.body.role
            }
        )

        res.json({
            name: user.name,
            email: user.email
        })

    } catch (error) {
        res.status(500).send(error)
    }
}



function getAllUsers(req, res) {
    userModel.find().then(response => res.json(response)).catch((err) => handleError(err, res))
}

function updateUser(req, res) {
    userModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
    userModel
      .remove({ _id: req.params.id })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
  }



module.exports = {
    createUser,
    getAllUsers,
    updateUser, 
    deleteUserById
}
