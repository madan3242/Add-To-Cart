const express = require("express");
const cloudinary = require("cloudinary").v2;
const Product = require("../models/product");
const { 
    getAllProducts, 
    deleteProductById, 
    getSingleProduct 
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getSingleProduct);


router.route("/admin/products/add").post(async (req, res) => {
  try {
    let imageArray = [];

    if(!req.files) {
        return res.status(401).json({
            message: "Product images are required",
          });
    }

    if(req.files){
        for(i = 0; i < req.files.photos; i++){
            let result = await cloudinary.uploader.upload(req.files.photos[i].tempFilePath, {
                folder: "products"
            })

            imageArray.push({
                id: result.public_id,
                secure_url: result.secure_url
            })
        }
    }

    req.body.photos = imageArray;
    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        msg: "Product created successfully",
        product
    })
  } catch (error) {
    res.status(500).json({
        error: `Your request cannot be processed. Please try again`
    })
  }
});

router.route("products/:id").delete(deleteProductById);

module.exports = router;
