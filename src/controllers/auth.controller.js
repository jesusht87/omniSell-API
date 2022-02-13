const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const saltRound = 10
        const hash = bcrypt.hashSync(req.body.password, saltRound)
        req.body.password = hash

        const user = await userModel.create(req.body)

        const token = jwt.sign({
            email: user.email
        }, process.env.SECRET, {
            expiresIn: '7d'
        })

        res.status(200).json({
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating user')
    }
}

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email})

        console.log(req.body.password, user.password)

        if (!user) return res.json({ error: 'user/password not found' }) //If user doesn't exist, send error


        if (bcrypt.compareSync(req.body.password, user.password)) {

            const data = {user_id: user._id}
            const token = jwt.sign(data, process.env.SECRET, {expiresIn: 60 * 60})

            res.json({token})
        } 

    } catch (error) {
        console.error(error)
    }
}

const check = async (req, res) => {
    if(!req.headers.token) return res.status(403).json({error : 'No Token Found'})
    return res.send('User logged in')
}

module.exports = {
    signup,
    login,
    check
}