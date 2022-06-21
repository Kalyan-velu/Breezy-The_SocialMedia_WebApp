const {isAuthenticated} = require("../middleware/auth");
const {
    accessChat,
    fetchChats,
    createGroupChat,
    renameGroupChat,
    addToGroup,
    removeFromGroup
} = require("../controllers/chatControllers");
const router = require('express').Router()


router.route(`/`).post(isAuthenticated, accessChat)
router.route(`/`).get(isAuthenticated, fetchChats)
router.route("/group").post(isAuthenticated, createGroupChat);
router.route("/group-rename").put(isAuthenticated, renameGroupChat);
router.route("/group-remove").put(isAuthenticated, removeFromGroup);
router.route("/group-add").put(isAuthenticated, addToGroup)

module.exports = router