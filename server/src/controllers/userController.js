const User = require("../models/userModel");
const AsyncErrors = require("../middlewares/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const cookieToken = require("../utils/cookieToken");

exports.signup = AsyncErrors(async (req, res, next) => {
  console.log(req.body);

  const { name, email, password } = req.body

  if(!email || !password || !name) {
    return next(new ErrorHandler('Name, Email Or Password is Required', 400))
  }

  const isExisting = await User.findOne({ email })

  if(isExisting) {
    return next(new ErrorHandler('User already exists, Please Login', 400))
  }

  const user = await User.create({
    name,
    email,
    password
  })

  cookieToken(user, res);
})

exports.login = AsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password){
    return next(new ErrorHandler('Email and Password required'))
  }

  const user = await User.findOne({ email }).select('+password')

  if(!user) {
    return next(new ErrorHandler("User don't exist, Please signup", 400))
  }

  const isPasswordMatch = await user.comparePassword(password)

  if(!isPasswordMatch){
    return next(new ErrorHandler("Email and Password don't match.", 400))
  }
  
  cookieToken(user, res)
})

exports.logout = AsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expiresIn: new Date( Date.now()),
    httpOnly: true
  })
  res.status(200).json({
    success: true,
    "message": "Logout Success"
  })
})

exports.viewProfile = AsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id)

  res.status(200).json({
    success: true,
    user
  })
})

exports.updateProfile = AsyncErrors(async (req, res, next) => {
  const {name, email} = req.body

  await User.findByIdAndUpdate(req.user.id, {
    name, email
  }, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    message: "User updated successfully"
  })
})

exports.changePassword = AsyncErrors(async (req, res, next) => {
  //get user from middleware
  const userId = req.user.id;
  //get user fro database
  const user = await User.findById(userId).select('+password');
  //check is old password valid
  const isOldPassword = user.comparePassword(req.body.oldPassword)

  if(!isOldPassword){
    return next(new ErrorHandler('Old Password is incorrect', 401))
  }

  //set new password
  user.password = req.body.password;

  // save and generate new token 
  await user.save();
  cookieToken(user, res)
})

exports.forgottenPassword = AsyncErrors(async (req, res, next) => {
  
})

exports.adminGetAllUsers = AsyncErrors(async (req, res, next) => {
  //Get all the users
  const users = await User.find();

  if(!users){
    return next(new ErrorHandler('No Users Found', 400))
  }

  res.status(201).json({
    success: true,
    users
  })

})

exports.adminGetOneUser = AsyncErrors(async (req, res, next) => {
  //Get all the users
  const user = await User.findById(req.params.id);

  if(!user){
    return next(new ErrorHandler('No User Found', 400))
  }

  res.status(201).json({
    success: true,
    user
  })

})

exports.adminUpdateOneUser = AsyncErrors(async (req, res, next) => {
  const { name, email, role } = req.body

  await User.findByIdAndUpdate(req.params.id, {
    name, email, role
  }, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    message: "User updated successfully"
  })

})

exports.adminDeleteOneUser = AsyncErrors(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if(!user){
    return next(new ErrorHandler('No User Found', 400))
  }
  
  res.status(201).json({
    success: true,
    message: "User deleted successfully"
  })

})
