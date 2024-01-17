const User = require("../models/userModel");
const AsyncErrors = require("../middlewares/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const cookieToken = require("../utils/cookieToken");
const { emailHelper } = require("../utils/emailHelper");
const crypto = require("crypto")

/**
 * Signup
 */
exports.signup = AsyncErrors(async (req, res, next) => {
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

/**
 * Login
 */
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

/**
 * Logout
 */
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

/**
 * Forgot password
 */
exports.forgotPassword = AsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if(!user) {
    return next(new ErrorHandler('User not found', 404))
  }

  //Get resetpassword token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`

  //craft message
  const message = `Your password reset token is: \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, Please ignore it.`;

  // attempt to send email
  try {
    await emailHelper({
      email: user.email,
      subject: "Add To Cart - Password reset email",
      message
    });

    //json response if email is success
    res.status(200).json({
      success: true,
      message: "Email send successfully"
    })
  } catch (error) {
    //reset user fields if things goes wrong
    user.resetPasswordToken = undefined;
    user.resetPasswordToken = undefined;
    await user.save({ validateBeforeSave: false });

    //send error response
    return next(new ErrorHandler(error.message, 500))
  }
})

/**
 * Reset password
 */
exports.resetPassword = AsyncErrors(async (req, res, next) => {
  //get token from params
  const token = req.params.token;

  // hash the token as db also stores the hashed version 
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  // find user based on hashed on token and time
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if(!user) {
    return next(new ErrorHandler('Token is invalid or expired', 400))
  }

  //check if password and confirm password matched
  if(req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password and Confirm Password Don't Match", 400))
  }

  //update password in db
  user.password = req.body.password;

  //reset token fields
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  //save the user
  await user.save();

  //send JSON response or Send Token
  cookieToken(user, res)
})

exports.viewProfile = AsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id)

  res.status(200).json({
    success: true,
    user
  })
})

/**
 * Update profile
 */
exports.updateProfile = AsyncErrors(async (req, res, next) => {
  const {name, email, phonenumber} = req.body

  const user = await User.findByIdAndUpdate(req.user.id, {
    name, email, phonenumber
  }, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    user
  })
})

/**
 * Change password
 */
exports.changePassword = AsyncErrors(async (req, res, next) => {
  //get user from middleware
  const userId = req.user.id;
  //get user from database
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
