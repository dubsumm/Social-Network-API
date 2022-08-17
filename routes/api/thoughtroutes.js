const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

} = require('../../controllers/thoughtController');

// api/thought 
router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:reactionId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

    module.exports = router;