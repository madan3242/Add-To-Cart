const express = require("express");
const { 
    getAllProducts, 
    deleteProductById, 
    getSingleProduct, 
    adminAddProduct
} = require("../controllers/productController");
const { 
    isLoggedIn, 
    customRole 
} = require('../middlewares/user');

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getSingleProduct);

router.route("/admin/products/add").post(isLoggedIn, customRole('admin') ,adminAddProduct);

router.route("products/:id").delete(deleteProductById);

module.exports = router;