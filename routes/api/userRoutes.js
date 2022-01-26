const router = require('express').Router()
const { getUser, getUsers, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')

// /api/user routes

// GET all users and POST new user
router.route('/').get(getUsers).post(createUser)

// GET user POST user Delete user
router.route('/:id').get(getUser).post(updateUser).delete(deleteUser)

// POST new firend Delete friend
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router