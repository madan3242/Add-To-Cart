import express from "express"
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productControllers.js";

let router = express.Router();

router.route('/')
        .post(createProduct)
        .get(getAllProducts);
router.route('/:id')
        .get(getSingleProduct)
        .put(updateProduct)
        .delete(deleteProduct);


export default router;