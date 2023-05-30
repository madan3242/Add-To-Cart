const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
    photos: [
        {
            id: {
                type: String,
                required: true
            },
            secure_url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        enum: ["MENS", "WOMENS", "KIDS"]
    },
    brand: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ["S", "M", "L", "XL"],
        default: "S",
    },
    stocks: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);