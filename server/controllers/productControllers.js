import { Product } from "../models/Product.js";

export const createProduct = async (req, res, next) => {
    try {
        let product = await Product.find({ name: req.body.name });
        if (product) {
            res.status(400).json({
                "error": "product already exist"
            })
        }

        product = await new Product(req.body);

        await product.save();

        res.status(200).json({
            "msg": "Product Created",
            "product": product
        })
    } catch (error) {
        res.status(500).json({
            "msg": "Product Created",
            "error": error
        })
    }
}

export const getSingleProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404).json({
            "error": "product not found"
        })
    }

    res.status(200).json({
        "msg": "Product Created",
        "product": product
    })
}

export const getAllProducts = async (req, res) => {
    let products = await Product.find();

    res.status(200).json({
        products
    })
}

export const updateProduct = async (req, res) => {
    let updateProduct = req.body;

    let product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404).json({
            "error": "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, {
        $set: updateProduct
    }, { new: true });

    res.status(200).json({
        "msg": "Product Updated",
        "product": product
    })
}

export const deleteProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404).json({
            "error": "product not found"
        })
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
        "msg": "Product deleted",
    })
}