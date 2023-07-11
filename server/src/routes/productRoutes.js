const express = require("express");
const { 
    getAllProducts, 
    getOneProduct, 
    adminAddProduct,
    adminUpdateProduct,
    adminDeleteProduct
} = require('../controllers/productController')
const { 
    isLoggedIn, 
    customRole 
} = require('../middlewares/user');

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getOneProduct);

//admin routes
router.route("/admin/products/add").post(isLoggedIn, customRole('admin') , adminAddProduct);

router.route("/admin/products").post(isLoggedIn, customRole('admin') );

router.route("/admin/products/:id")
    .put(isLoggedIn, customRole('admin'), adminUpdateProduct)
    .delete(isLoggedIn, customRole('admin'), adminDeleteProduct);

module.exports = router;