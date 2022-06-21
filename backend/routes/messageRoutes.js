const {isAuthenticated} = require("../middleware/auth");
const {sendMessage, allMessages} = require("../controllers/MessageController");
const router = require('express').Router()

router.route("/").post(isAuthenticated, sendMessage)
router.route("/:chatId").get(isAuthenticated, allMessages)

module.exports = router