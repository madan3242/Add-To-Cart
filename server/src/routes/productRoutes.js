const express = require("express");
const { 
    getAllProducts, 
    getOneProduct, 
    addReview,
    deleteReview,
    getOnlyReviewsForOneProduct,
    adminAddProduct,
    adminUpdateProduct,
    adminDeleteProduct,
    adminAllProducts,
} = require('../controllers/productController')
const { 
    isLoggedIn, 
    customRole 
} = require('../middlewares/user');

const router = express.Router();

//user routes
router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getOneProduct);
router.route("/review").post(isLoggedIn, addReview);
router.route("/review").delete(isLoggedIn, deleteReview);
router.route("/reviews").get(isLoggedIn, getOnlyReviewsForOneProduct);

//admin routes
router.route("/admin/products/add").post(isLoggedIn, customRole('admin') , adminAddProduct);

router.route("/admin/products").get(isLoggedIn, customRole('admin'), adminAllProducts );

router.route("/admin/products/:id")
    .put(isLoggedIn, customRole('admin'), adminUpdateProduct)
    .delete(isLoggedIn, customRole('admin'), adminDeleteProduct);

module.exports = router;