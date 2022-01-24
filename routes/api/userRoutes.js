const router = require('express').Router()

const {
  getUsers
} = require('../../controllers/userController')

// /api/user
router.route('/').get(getUsers)

module.exports = router