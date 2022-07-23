const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
require('dotenv').config({path:'../config/config.env'})

AdminJS.registerAdapter(AdminJSMongoose)
const adminJs = new AdminJS({
    resources: [
        { resource:User,
            options:{
            properties:{
                _id:{isVisible:{edit:false,show:true,list:true,filter:true}},
                password:{isVisible:{edit:false,show:false,list:true,filter:true}}
            },
            }
        }, Post,Chat,Message],
    branding:{
        logo:"../logo/logo.png",
        companyName:"Breezy",
        favicon:'../logo/logo.png'
    },
    rootPath: '/admin',
})
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,{
    cookieName:process.env.ADMIN_COOKIE_NAME || 'adminjs',
    cookiePassword:process.env.ADMIN_COOKIE_PASSWORD || 'passwordddahdjkfk' ,
    authenticate:async (email,password)=>{
        try {
            //see if user exists
            let user = await User.findOne({email}).select("+password");
            if (!user) {
                return false
            }
            //check if password is correct
            const isMatch = await user.matchPassword(password);
            if (!isMatch) {
                return false
            } else {
                return user
            }
        }
//catch error
        catch (error) {
            console.log(error)
        }
    },},
    null, {
        resave: false,
        saveUninitialized: true,
    })
module.exports = router