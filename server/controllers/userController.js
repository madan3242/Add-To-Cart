const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSignup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if email or password exist
    if (!email || !password) {
      return res.status(400).json({
        error: "Email or Password required",
      });
    }

    //check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exist. Please login",
      });
    }

    //create password hash
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    //create new user
    const user = await User.create({
      email,
      password: encryptedPassword,
      name: "",
      phonenumber: "",
    });

    //payload for jwt token
    const payload = {
      id: user._id,
    };

    //create jwt token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    //sending response back
    user.password = undefined;
    res.status(200).json({
      token: token,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      error: `Your request cannot be processed. Please try again`,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if email or password exist
    if (!email || !password) {
      return res.status(400).json({
        error: "Email or Password required",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        error: "User does't exists. Please Signup",
      });
    }

    //verify password hash
    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      return res.status(400).json({
        error: "Email or password does not match or exist",
      });
    }

    //payload for jwt token
    const payload = {
      id: user._id,
    };

    //create jwt token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    //sending response back
    user.password = undefined;
    res.status(200).json({
      token: token,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `Your request cannot be processed. Please try again`,
    });
  }
};

const userLogout = async (req, res) => {
  try {
    res.status(200).json({
      token: null,
      user: null,
    });
  } catch (error) {
    res.status(500).json({
      error: `Your request cannot be processed. Please try again`,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, {
      $set: req.body
    }, { new: true })

    res.status(201).json({
      user
    })
  } catch (error) {
    res.status(500).json({
      error: `Your request cannot be processed. Please try again`,
    });
  }
}

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

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
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

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
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
  userLogin,
  userLogout,
  updateProfile,
  adminGetAllUsers,
  adminGetUserById,
  adminDeleteUserById,
};
