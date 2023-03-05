import mongoose from "mongoose";
import validator from "validator";
import bcrypt from  "bcryptjs";

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your full name'],
        maxLength: [40, 'Name should be under 40 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        validate: [validator.isEmail, 'Please enter email in proper format'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: [6, 'Password should be atleast 6 characters']
    },
    gender: {
        type: String,
        required: [true, 'Please provide your gender'],
        enum: {
            values: ['male', 'female', 'others'],
            message: 'Please select gender'
        }
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        streetno: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            min: 6,
            max: 6,
            required: true,
        }
    },
    phoneno: {
        type: String,
        required: true,
    },
    photo: {

    },
    role: {
        type: String,
        default: "user"
    },
    wishlist: [
        {
            type: String,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// encrypt password before save - HOOKS
userSchema.pre('save', async function() {
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// validate the password with passed on user password
userSchema.methods.isValidatePassword = async function(userSendPassword) {
    return await bcrypt.compare(userSendPassword, this.password)
}

export const User = mongoose.model("User", userSchema);