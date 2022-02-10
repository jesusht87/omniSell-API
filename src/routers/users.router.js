const router = require('express').Router()
const {
    createUser, 
    getAllUsers,
    updateUser,
    deleteUserById
} = require('../controllers/users.controller')

router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)
module.exports = router 