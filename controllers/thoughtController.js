const { User, Thought } = require('../models')

// GET one thought by id
const getThought = async (req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.id })
        if (!thought) {
            res.status(404).json({ message: 'Thought not found!' })
        }
        res.status(200).json(thought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// GET all thoughts
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find()
        if (!thoughts) {
            res.status(404).json({ message: 'Thoughts not found!' })
        }
        res.status(200).json(thoughts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// POST new thought
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        const user = await User.findOneAndUpdate(
            { username: req.body.username },
            { $push: { thoughts: thought._id } },
            { new: true }
        )
        res.status(200).json({ thought, user })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// PUT update thought by id
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (!thought) {
            res.status(404).json({ message: 'thought not found!' })
        }
        res.status(200).json(thought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// DELETE thought by id
const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.id })
        if (!thought) {
            res.status(404).json({ message: 'thought not found!' })
        }
        res.status(200).json(thought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// POST add reaction
const addReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.id }, { $push: { reactions: req.body } })
        res.status(200).json(reaction)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// DELETE thoughts reaction
const deleteReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.id }, { $pull: { reactions: req.body } })
        res.status(200).json(reaction)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = { getThought, getThoughts, createThought, updateThought, deleteThought, addReaction, deleteReaction }