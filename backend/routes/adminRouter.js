const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");

AdminJS.registerAdapter(AdminJSMongoose)
const adminJs = new AdminJS({
    databases: [mongoose],
    resources: [User, Post,Chat,Message],
    rootPath: '/admin',
})

const router = AdminJSExpress.buildRouter(adminJs)
module.exports = router