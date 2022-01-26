const router = require('express').Router()
const { getThought, getThoughts, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController')

// /api/thought routes

// GET all thoughts POST new thought
router.route('/').get(getThoughts).post(createThought)

// GET thought POST thought DELETE thought
router.route('/:id').get(getThought).put(updateThought).delete(deleteThought)

// POST reaction
router.route('/:id/reactions').post(addReaction)

// DELETE reaction
router.route('/:id/reactions/:reactionId').delete(deleteReaction)

module.exports = router