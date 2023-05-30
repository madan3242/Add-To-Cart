const User = require("../models/user");

const userSignup = async (req, res) => {};




const adminGetAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({
        error: `Your request cannot be processed. Please try again`,
    });
  }
};

const adminGetUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if(!user) {
        return res.status(401).json({
            error: 'User not found'
        })
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: `Your request cannot be processed. Please try again`,
    });
  }
};

const adminDeleteUserById = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if(!user) {
        return res.status(401).json({
            error: 'User not found'
        })
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: `Your request cannot be processed. Please try again`,
    });
  }
};

module.exports = {
  userSignup,
  adminGetAllUsers,
  adminGetUserById,
  adminDeleteUserById
};
