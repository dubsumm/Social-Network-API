const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// api/users 
router.route('/')
    .get(getUsers)
    .post(createUser);

// api/users/:userId

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

    // api/user/:userid/friend/:friendId

    router.route('/:userId/friend/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports =router;