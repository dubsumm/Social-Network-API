const {User } = require('../models');

module.exports = {
    getUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    
    getSingleUser(req,res) {
        User.findOne({ _id:req.params.userId })
        .select('-__V')
        .then((user) => 
        !user
        ? res.status(404).json({message: 'User DNE'})
        :res.json(user)
    )
        .catch((err) => res.status(500).json(err));
    },
 
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
        console.log(err);
        return res.status(500).json(err)
      })
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body },
            { runValidators: true, new: true}
        )
        .then((user) =>
            !user
            ? res.status(404).json({message: "No user with this ID!"})
            :res.json(user)
        )
        .catch((err) => res.status(500).json(err));

    },

    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userId})
        .then((user) =>
        !user
        ? res.status(404).json({message: 'No user with this ID!'})
        : Thought.deleteMany({ _id: { $in: username.thought } })
        )
        .then(() => res.json({message: 'User and associated Thoughts deleted!'}))
        .catch((err) => res.status(200).json(err));
    },
    addFriend(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendId}}
        )
        .then((user) => 
        !user
        ?res.status(404).json({message: "User DNE"})
        :res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}}
        )
        .then((user) => 
        !user
        ?res.status(404).json({message: "User DNE"})
        :res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }

}