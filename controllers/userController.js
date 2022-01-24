const { User } = require('../models')

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
            // .populate('thoughts')
            // .populate('friends')
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = { getUsers }