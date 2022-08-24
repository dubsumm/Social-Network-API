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

    // api/thought/:thoughtId
router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

    router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

    module.exports = router;