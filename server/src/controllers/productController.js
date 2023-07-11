const AsyncErrors = require("../middlewares/asyncErrors");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary").v2;

exports.getAllProducts = AsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json(products);
})

exports.getOneProduct = AsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if(!product){
    return next(new ErrorHandler('No Product found', 401))
  }

  res.status(200).json({
    success: true,
    product
  })
})

exports.adminAddProduct = AsyncErrors(async ( req, res, next ) => {
  let imageArray = []

  if(!req.files){
    return next(new ErrorHandler('Product images are required', 401))
  }

  if(req.files){
    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.uploader.upload(req.files.photos[index].tempFilePath, {
        folder: 'add-to-cart/products'
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
    success: true,
    message: "Product created successfully",
    product
  })
})

exports.adminAllProducts = AsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json(products);
})

exports.adminUpdateProduct = AsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if(!product){
    return next(new ErrorHandler('Product not found', 401))
  }

  let imageArray = []

  if(req.files){
    for (let index = 0; index < product.photos.length; index++) {
      const res = await cloudinary.uploader.destroy(
        product.photos[index].tempFilePath
      )
    }

    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.uploader.upload(req.files.photos[index].tempFilePath, {
        folder: 'add-to-cart/products'
      })

      imageArray.push({
        id: result.public_id,
        secure_url: result.secure_url
      })
    }
  }

  req.body.photos = imageArray

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(201).json({
    success: true,
    message: "Product updated successfully",
    product
  })
})

exports.adminDeleteProduct = AsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if(!product){
    return next(new ErrorHandler('Product not found', 401))
  }

  for (let index = 0; index < product.photos.length; index++) {
    const res = await cloudinary.uploader.destroy(
      product.photos[index].tempFilePath
    )
  }

  await product.remove()

  res.status(201).json({
    success: true,
    message: "Product deleted successfully",
  })
})