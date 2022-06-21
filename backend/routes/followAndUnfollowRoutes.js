const express = require('express');
const {isAuthenticated} = require("../middleware/auth");
const {followUser} = require("../controllers/followAndUnfollow");


const router = express.Router();

router.route(`/follow/:id`).get(isAuthenticated, followUser)

module.exports = router;