const { User } = require('../models')

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        console.log('===== all users ======', allUsers)
        return res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports = { getUsers }