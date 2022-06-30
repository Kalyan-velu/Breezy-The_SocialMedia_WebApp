const express = require('express');
const {
    register, login, logout, updatePassword, updateProfile, deleteProfile, myProfile, getUserProfile, forgotPassword,
    resetPassword, getAllUsers, searchUser, getMyPosts
} = require("../controllers/user");
const {isAuthenticated} = require("../middleware/auth");

const router = express.Router();

router.route(`/register`).post(register)
router.route(`/login`).post(login)
router.route(`/logout`).get(logout)
router.route(`/update/password`).put(isAuthenticated, updatePassword)
router.route(`/update/profile`).put(isAuthenticated, updateProfile)
router.route(`/me/delete/:id`).delete(isAuthenticated, deleteProfile)
router.route(`/me/posts`).get(isAuthenticated, getMyPosts)
router.route(`/me`).get(isAuthenticated, myProfile)
router.route(`/user/:id`).get(isAuthenticated, getUserProfile)
router.route(`/users`).get(isAuthenticated, getAllUsers)
router.route(`/user/forgot-password`).post(forgotPassword)
router.route(`/reset-password/:token`).put(resetPassword)
router.route(`/`).get(isAuthenticated, searchUser)
module.exports = router;