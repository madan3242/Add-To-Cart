const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
    
        if(!product) {
            return res.status(401).json({
                error: 'Product not found'
            })
        }
    
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({
          error: `Your request cannot be processed. Please try again`,
        });
      }
}

const deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
    
        if(!product) {
            return res.status(401).json({
                error: 'Product not found'
            })
        }
    
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({
          error: `Your request cannot be processed. Please try again`,
        });
      }
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    deleteProductById
}