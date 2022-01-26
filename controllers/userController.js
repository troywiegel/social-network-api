const { User } = require('../models')

// GET one user by id
const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
            .populate('thoughts')
            .populate('friends')
        if (!user) {
            res.status(404).json({ message: 'User not found!' })
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// GET all users
const getUsers = async (req, res) => {
    try {
        const user = await User.find()
        // .populate('thoughts')
        // .populate('friends')
        if (!user) {
            res.status(404).json({ message: 'No users found!' })
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// POST new user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// PUT update user by id
const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })

        if (!user) {
            res.status(404).json({ message: 'no user with that id found!' })
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// DELETE user by id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ message: 'User deleted!' })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// POST add friend
const addFriend = async (req, res) => {
    try {
        const friend = await User.findOneAndUpdate({ _id: req.params.id }, { $push: { friends: req.params.friendId } }, { new: true })
        res.status(200).json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// DELETE users friend
const deleteFriend = async (req, res) => {
    try {
        const friend = await User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } })
        res.status(200).json({ message: 'Friend deleted!' })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser, addFriend, deleteFriend }