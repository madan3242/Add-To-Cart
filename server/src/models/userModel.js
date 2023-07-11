const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter proper name'],
        maxLength: [30, "Name cannot exceed more than 30 characters"],
        minLength: [4, "Name should be more than 4 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [8, "Password should be of more than 8 chatarcters"],
        select: false
    },
    phonenumber: {
        type: Number,
        maxLength: [10, "Mobile number should be of 10 digits"]
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: String
})

//encrypt the password before save
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10);
})

//compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
}

module.exports = mongoose.model('User', userSchema);