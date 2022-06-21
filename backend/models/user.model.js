const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Name is required'
        ]
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [
            true,
            'Password is required'
        ],
        minlength: [
            8,
            'Password must be at least 8 characters'
        ],
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    avatar: {
        public_id: String,
        url: String,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,

})
userSchema.pre('save', async function (next) {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 10)
            //this is to hash the password before it is saved to the database
        }
        next()
    }
)

userSchema.methods.matchPassword = async function (password) {
    console.log(password)
    return await bcrypt.compare(password, this.password)
    //this is to compare the password with the hashed password
}

userSchema.methods.getJWT = function () {
    return jwt.sign({
        _id: this._id,
    }, process.env.SECRET_KEY)
}

userSchema.methods.getResetPasswordToken = function () {    //this is to generate a token for the user to reset the password
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256')
        .update(resetToken)
        .digest('hex')
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
}
module.exports = mongoose.model('User', userSchema)