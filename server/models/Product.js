import mongoose from "mongoose";

let productSchema = mongoose.Schema({
    name,
    price,
    description,
    photos,
    category,
    stock,
    brand,
    rating,
    numberOfReviews,
    reviews,
    user,
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Product = mongoose.model("Product", productSchema);