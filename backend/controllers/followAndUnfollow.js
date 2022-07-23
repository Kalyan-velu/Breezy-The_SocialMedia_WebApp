const User = require("../models/user.model");



exports.followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id) //finding user by id
        const loggedInUser = await User.findById(req.user._id) //finding logged in user
        if (!userToFollow) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
            })
        }
        //if user is following himself
        if (userToFollow._id.toString() === loggedInUser._id.toString()) {
            return res.status(400).json({
                message: 'You cannot follow yourself',
                success: false,
            })
        }

        if (loggedInUser.following.includes(userToFollow._id)) {    //if user is already following
            const indexFollowing = loggedInUser.following.indexOf(userToFollow._id)
            loggedInUser.following.splice(indexFollowing, 1); //removing user from following

            const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id)
            userToFollow.followers.splice(indexFollowers, 1) //removing user from followers

            await loggedInUser.save()
            await userToFollow.save()
            return res.status(200).json({
                success: true,
                message: "User Unfollowed"
            })
        } else {

            loggedInUser.following.push(userToFollow._id)    //adding user to following
            userToFollow.followers.push(loggedInUser._id)    //adding user to followers

            await loggedInUser.save()
            await userToFollow.save()
            return res.status(200).json({
                success: true,
                message: "User Followed"
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}