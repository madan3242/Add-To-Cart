const Product = require("../models/product");
const cloudinary = require("cloudinary").v2;

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

const adminAddProduct = async (req, res) => {
    try {
      let imageArray = [];
  
      if(!req.files) {
          return res.status(401).json({
              message: "Product images are required",
            });
      } 
      
      if(req.files) {
          console.log(req.files.photos);
          for (let index = 0; index < req.files.photos.length; index++) {
  
              let result = await cloudinary.uploader.upload(req.files.photos[index].tempFilePath, {
                  folder: "add-to-cart/products"
              })
              
              imageArray.push({
                  id: result.public_id,
                  secure_url: result.secure_url,
              });
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
  }

module.exports = {
    getAllProducts,
    getSingleProduct,
    deleteProductById,
    adminAddProduct
}