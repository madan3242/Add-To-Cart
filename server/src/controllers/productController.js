const AsyncErrors = require("../middlewares/asyncErrors");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/ApiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary").v2;

/**
 * View all products
 */
exports.getAllProducts = AsyncErrors(async (req, res, next) => {
  const resultPerPage = 6;
  const totalProductCount = await Product.countDocuments();

  const productsObj = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()

  let products = await productsObj.base;

  let filteredProductNumber = products.length;

  productsObj.pagination(resultPerPage);

  products = await productsObj.base.clone();

  res.status(200).json({
    success: true,
    products,
    resultPerPage,
    filteredProductNumber,
    totalProductCount
  });
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

exports.addReview = AsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const { rating, comment, productId } = req.body

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment
  }

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler('No product found.', 404))
  }

  const isReviewed = product.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  )

  if(isReviewed) {
    product.reviews.forEach((review) => {
      if(review.user.toString() === req.user._id.toString())
        (review.rating = rating), (review.comment = comment)
    })
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length
  }

  let avg = 0;

  product.reviews.forEach((review) => {
    avg += review.rating
  })

  product.rating = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false })

  res.status(200).json({
    success: true
  })
})

exports.deleteReview = AsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId)

  if(!product) {
    return next( new ErrorHandler('Product not found', 404))
  }

  const reviews = product.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  )

  let avg = 0;

  reviews.forEach((review) => {
    avg += review.rating
  })

  let ratings = 0;

  if(reviews.length === 0) {
    ratings = 0
  } else {
    ratings = avg / reviews.length
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false
    }
  )

  res.status(200).json({
    success: true
  })
})

exports.getOnlyReviewsForOneProduct = AsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id)

  res.status(200).json({
    success: true,
    reviews: product.reviews
  })
})

exports.adminAddProduct = AsyncErrors(async ( req, res, next ) => {
  let imageArray = [];

  if(!req.body.photos){
    return next(new ErrorHandler('Product images are required', 401))
  }

  if(req.body.photos.length > 0){
    for (let index = 0; index < req.body.photos.length; index++) {
      let result = await cloudinary.uploader.upload(req.body.photos[index], {
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

  res.status(200).json({
    products: products
  });
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
  let product = await Product.findByIdAndDelete(req.params.id)

  if(!product){
    return next(new ErrorHandler('Product not found', 401))
  }

  for (let index = 0; index < product.photos.length; index++) {
    await cloudinary.uploader.destroy(
      product.photos[index].id
    )
  }

  res.status(201).json({
    success: true,
    message: "Product deleted successfully",
  })
})