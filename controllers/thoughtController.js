const { ObjectId} = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    getOneThought(req,res) {
        Thought.findOne({ _id:req.params.thoughtId })
    .populate({ path: 'reactions' })
        .select('-__V')
        .then((thought) => 
        !thought
        ? res.status(404).json({message: 'Thought DNE'})
        :res.json(thought)
    )
        .catch((err) => res.status(500).json(err));
    },

    createThought(req,res) {
        Thought.create(req.body)
        .then((thought => {
            User.findOneAndUpdate(
            {id: body.userId},
            { $push: {thoughts: thought._id}},
        )
        .then((user) => 
        !user
        ?res.status(400).json({message: 'User with this Id DNE'})
        :res.json(user)).catch((err) => res.status(200).json(err))      
        }))
        .catch(err => res.status(200).json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body },
            { runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({message: "No thought with this ID!"})
            :res.json(thought)
        )
        .catch((err) => res.status(500).json(err));

    },
    deleteThought(req, res) {
        Thought.deleteOne({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "Thought does not exist" })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      addReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions: req.body }}
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "No thought with that ID" })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      removeReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: req.body } }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "No thought with that ID" })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
}