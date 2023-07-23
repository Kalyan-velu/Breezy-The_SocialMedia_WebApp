const express = require('express');
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostsOfFollowing,
  updateCaption,
  addComment,
  deleteComment
} = require("../controllers/post");
const {isAuthenticated} = require("../middleware/auth");
const router = express.Router();


router
  .route(`/post/upload`) //post/upload
  .post(isAuthenticated, createPost)  //check if user is authenticated and then create post
router
  .route(`/post/:id`) //find post by id
  .get(isAuthenticated, likeAndUnlikePost)//like and unlike post
  .put(isAuthenticated, updateCaption)//update caption of post
  .delete(isAuthenticated, deletePost)//delete post
router
  .route(`/posts`)
  .get(isAuthenticated, getPostsOfFollowing)
router
  .route(`/post/comment/:id`)
  .put(isAuthenticated, addComment)
router
  .route(`/post/comment/:postId/:commentId`)
  .delete(isAuthenticated, deleteComment)
module.exports = router;