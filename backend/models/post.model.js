const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption: String,
    image: {
        public_id: String,
        url: String,
    }, //image is a string of the image url
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,        //user id
            ref: 'User'
        }],
    comments: [{
        comment: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
}, {
    //this is to make sure that the date is automatically added when a new post is created
    timestamps: true
})
module.exports = mongoose.model('Post', postSchema)