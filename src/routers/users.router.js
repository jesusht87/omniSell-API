const router = require('express').Router()
const {
    createUser, 
    getAllUsers,
    updateUser,
    deleteUserById, 
    filterUsersByStore
} = require('../controllers/users.controller')
const {checkAuth,
       checkAdmin,
       checkManager} = require('../utils/auth')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, checkManager, filterUsersByStore)  
router.post('/', checkAuth, checkAdmin, createUser)
router.put('/:id', checkAuth, checkAdmin, updateUser)
router.delete('/:id', checkAuth, checkAdmin, deleteUserById)
module.exports = router 