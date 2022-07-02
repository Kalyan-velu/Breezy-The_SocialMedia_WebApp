const User = require('../models/user.model');
const Post = require('../models/post.model');
const {sendEmail} = require("../middleware/sendEmail");
const crypto = require('crypto');
const cloudinary = require('cloudinary');
exports.register = async (req, res) => {
    try {
        //get the user data from the request
        const {name, email, password,avatar} = req.body;
        //see if user already exists
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        console.log(avatar)//uploading the avatar to cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(avatar,{
            folder: "avatars"
        })
        //create a new user
        user = await User.create({
            name,
            email,
            password,
            avatar:{
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }});
        //create a token
        const token = await user.getJWT();
        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }
        //send the token back to the client
        return res.status(200)
            .cookie(
                "token",
                token,
                options)
            .json({
                success: true,
                user,
                token,
            })
    }
        //catch error
    catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}
exports.login = async (req, res) => {
    try {
        //get the user data from the request
        const {email, password} = req.body;
        console.log(email, password);
        //see if user exists
        let user = await User.findOne({email}).select("+password").populate("posts following followers");
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User does not exist'
            })
        }
        //check if password is correct
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect password'
            })
        } else {
            //create a token
            const token = await user.getJWT();
            const options = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            //send the token back to the client
            res.status(200)
                .cookie(
                    "token",
                    token,
                    options)
                .json({
                    success: true,
                    user,
                    token,
                })
        }
    }
//catch error
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "Logged out"
        })
    }
        //catch error
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Update
exports.updatePassword = async (req, res) => {
    try {
        //get the user data from the request
        const {oldPassword, newPassword} = req.body;
        //if the body is empty
        if (!oldPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Please provide old and new password"
            })
        }
        //check if old password is correct
        const user = await User.findById(req.user._id).select("+password"); //using select to get the password
        const isMatch = await user.matchPassword(oldPassword);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect Old password'
            })
        } else {
            //update the password
            user.password = newPassword;
            await user.save();
            res.status(200).json({
                success: true,
                message: "Password updated"
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.updateProfile = async (req, res) => {
    try {
        //get the user data from the request
        const {name, email,avatar} = req.body;

        //get the user from the request
        const user = await User.findById(req.user._id);
        //update the user
        if (name) {
            user.name = name;
        }
        //update
        if (name) {
            user.email = email;
        }

        if(avatar) {
            try {
                await cloudinary.v2.uploader.destroy(user.avatar.public_id)
                const myCloud = await cloudinary.v2.uploader.upload(avatar, {
                folder: "avatars"
            })
            user.avatar.public_id = myCloud.public_id;
            user.avatar.url = myCloud.secure_url;
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message
                })
            }
        }
        //save the user
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated"
        })
    } catch (e) {
        res.status(401).json({
            success: false,
            message: e.message
        })
        console.log(e.message)
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const posts = await Post.find({user: user._id});
        const followers = user.followers;
        const following = user.following;

        await user.remove();
        //logout user
        res.cookie("token", null,
            {expires: new Date(0)},
            {httpOnly: true})
        //delete the posts
        for (let i = 0; i < posts.length; i++) {
            const post = await Post.findById(posts[i]);
            await cloudinary.v2.uploader.destroy(post.image.public_id);
            await post.remove();
        }
        //Remove user from followers following
        for (let i = 0; i < followers.length; i++) {
            const follower = await User.findById(followers[i]);
            const index = follower.following.indexOf(user._id);
            follower.following.splice(index, 1);
            await follower.save();
        }
        //Remove user from following's followers
        for (let i = 0; i < following.length; i++) {
            const follows = await User.findById(followers[i]);
            const index = follows.followers.indexOf(user._id);
            follows.followers.splice(index, 1);
            await follows.save();
        }
        //removing comments of user from all posts
        const allPosts=await Post.find()
        for (let i = 0; i < allPosts.length; i++) {
            const post =await Post.findById(allPosts[i]._id);
            const comments = post.comments;
            for (let j = 0; j < comments.length; j++) {
                if(comments[j].user===user._id){
                    post.comments.splice(j,1);
                }
            }
            await post.save();
        }
        //removing likes of user from all posts
        for (let i = 0; i < allPosts.length; i++) {
            const post =await Post.findById(allPosts[i]._id)
            const likes = post.likes;
            for (let j = 0; j < likes.length; j++) {
                if(likes[j].user===user._id){
                    post.likes.splice(j,1);
                }
            }
            await post.save();
        }

        return res.status(200).json({
            success: true,
            message: "Profile deleted"
        })

    }//catch error
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.myProfile = async (req, res) => {
    try {
        //get the user from the request
        const user = await User.findById(req.user._id).populate("posts following followers"); //populate the posts
        //send the user back to the client
        return res.status(200).json({
            success: true,
            user
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("posts following followers")

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        return res.status(200).json({
            success: true,
            user
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

//forgot password
exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        //reset the password
        const resetPasswordToken = user.getResetPasswordToken();
        await user.save({validateBeforeSave: false});

        const resetURL = `${req.protocol}://${req.get("host")}/reset-password/${resetPasswordToken}`;
        const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirmation to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
        try {
            await sendEmail({
                email: user.email,
                subject: "Your password reset token (valid for 10 minutes)",
                message
            })
            return res.status(200).json({
                success: true,
                message: `Token sent to ${user.email}`
            })
        } catch (e) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpiry = undefined;
            await user.save({validateBeforeSave: false});
            return res.status(500).json({
                success: false,
                message: e.message
            })
        }
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpiry: {$gt: Date.now()}
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Token expired"
            })
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiry = undefined;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "Password changed"
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            users
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
exports.searchUser = async (req, res) => {
    try {
        const keyword = req.query.search ? {
            $or: [
                {
                    //matching patterns with  regex
                    name: {$regex: req.query.search, $options: "i"}
                },
                {
                    email: {$regex: req.query.search, $options: "i"}
                }
            ]
        } : {};
        //Not to show current logged-in User
        const users = await User.find(keyword).find({_id: {$ne: req.user._id}})
        res.send(users)
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
exports.getMyPosts = async (req, res) => {
    try{
        const user = await User.findById(req.user._id)
        const posts=[]
        for(let i=0;i<user.posts.length;i++){
            const post = await Post.findById(user.posts[i]).populate(
                "comments.user likes owner")
            posts.push(post)
        }
        //sorting the posts by date
       const sortedPosts= posts.sort((a,b)=>{
            return b.createdAt-a.createdAt
        } )
        return res.status(200).json({
            success: true,
           sortedPosts
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
exports.getUserPosts = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const posts=[]
        for(let i=0;i<user.posts.length;i++){
            const post = await Post.findById(user.posts[i]).populate(
                "comments.user likes owner")
            posts.push(post)
        }
        //sorting the posts by date
        const sortedPosts= posts.sort((a,b)=>{
            return b.createdAt-a.createdAt
        } )
        return res.status(200).json({
            success: true,
            sortedPosts
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }

}