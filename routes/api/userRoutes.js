//basing on the miniproject

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend, 
} = require('../../controllers/userController.js');

// /api/users
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//now moving to the friends
router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .put(deleteFriend);

module.exports = router;


