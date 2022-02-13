const router = require('express').Router()
const {
    createUser, 
    getAllUsers,
    updateUser,
    deleteUserById, 
    filterUsersByStore
} = require('../controllers/users.controller')

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', filterUsersByStore)  // Get all users and apply filter by the store ID given in the request
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)
module.exports = router 