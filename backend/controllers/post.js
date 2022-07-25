const Post = require('../models/post.model')
const User = require('../models/user.model')
const cloudinary = require("cloudinary").v2;


exports.createPost = async (req, res) => {
    try {
        const myCloud = await cloudinary.uploader.upload(req.body.image,{
            folder: "posts",
            quality: "50",
        });
        const newPostData = {
            caption: req.body.caption,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
            owner: req.user._id,
        }
        //creating new post with data
        const newPost = await Post.create(newPostData)
        const user = await User.findById(req.user._id)
        user.posts.unshift(newPost._id)
        await user.save()

        res.status(201).json({
            success: true,
            message: 'Post created successfully',
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deletePost = async (req, res) => {
    try {
        //finding post by id
        const post = await Post.findById(req.params.id)
        //if post not found
        if (!post) {
            return res.status(404).json({
                message: "Post not found",
                success: false
            })
        }
        //post owner is not same as user
        if (post.owner._id.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                message: "You are not authorized to delete this post",
                success: false
            })
        }
        await cloudinary.uploader.destroy(post.image.public_id)
        //deleting post
        await post.remove()
        //deleting post from user
        const user = await User.findById(req.user._id)
        const index = user.posts.indexOf(req.params.id)
        user.posts.splice(index, 1)
        await user.save()
         res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        })
    } catch (e) {
            return res.status(500).json({
                success:false,
                message:e.message,
            })
    }
}

exports.likeAndUnlikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({
                message: 'Post not found',
                success: false,
            })
        }
        if (post.likes.includes(req.user._id)) {
            const index = post.likes.indexOf(req.user._id)
            post.likes.splice(index, 1)

            await post.save()
            return res.status(200).json({
                success: true,
                message: "Unliked Post"
            })
        } else {
            post.likes.push(req.user._id)
            await post.save()
            return res.status(200).json({
                success: true,
                message: "Liked Post"
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.getPostsOfFollowing = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('following') //populate following
        const posts = await Post.find({owner: {$in: user.following}})
            .populate("owner likes comments.user")//finding posts of all users user is following
        //sorting posts by date
        const sortedPosts = posts.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return res.status(200).json({
            success: true,
            sortedPosts
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.updateCaption = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            })
        }
        if (post.owner.toString() !== req.user._id.toString()) { //post owner is not same as user
            return res.status(401).json({
                success: false,
                message: "You are not authorized to update this post"
            })
        }
        post.caption = req.body.caption
        await post.save()
        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            post
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.addComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            })
        }
        let commentIndex = -1

        post.comments.forEach((item, index) => {
            if (item.user.toString() === req.user._id.toString()) {
                return commentIndex = index
            }
        })

        if (commentIndex !== -1) {
            post.comments[commentIndex].comment = req.body.comment

            await post.save()

            return res.status(200).json({
                success: true,
                message: "Comment Updated"
            })
        } else {
            post.comments.push({
                user: req.user._id,
                comment: req.body.comment,
            })
            await post.save()
            return res.status(200).json({
                success: true,
                message: "Comment Added"
            })
        }

    } catch (e) {
        res.status(401).json({
                success:false,
                message:e.message
            }
        )
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            })
        }
        //checking if owner of post is same as user
        if (post.owner.toString() === req.user._id.toString()) {

            if (req.body.commentId === undefined) {
                return res.status(400).json({
                    success: false,
                    message: "Comment Id is required"
                })
            }
            post.comments.forEach((item, index) => {    //finding comment by id
                if (item._id.toString() === req.body.commentId.toString()) {
                    return post.comments.splice(index, 1)   //deleting comment
                }
            })
            await post.save()
            return res.status(200).json({
                success: true,
                message: "Selected Comment has been Deleted"
            })
        } else {
            post.comments.forEach((item, index) => { //checking if comment is of user
                if (item.user.toString() === req.user._id.toString()) {
                    return post.comments.splice(index, 1)
                }
            })
            await post.save()
            return res.status(200).json({
                success: true,
                message: "Your has been Comment Deleted"
            })
        }
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}