const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        maxLength: [120, "Product name should not be more than 120 characters"],
        trim: true
    },
    price: {
        type: Number,
        require: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
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
        required: [true, "Please Enter Product Category"],
    },
    brand: {
        type: String,
        required: true
    },
    stocks: {
        type: Number,
        required: [true, "Please Enter Product Stocks"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1
    },
    rating: {
        type: Number,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
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