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
        res.status(500).send('Error creating user.')
    }
}

module.exports = {
    createUser
}
