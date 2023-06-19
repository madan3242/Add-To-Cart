const express = require('express');

const { 
    isLoggedIn, 
    customRole 
} = require('../middlewares/user');
const { 
    adminGetAllUsers, 
    adminGetUserById, 
    adminDeleteUserById, 
    userSignup,
    userLogin,
    userLogout,
    viewProfile,
    updateProfile
} = require('../controllers/userController');

const router = express.Router();

router.route('/signup').post(userSignup);

router.route('/login').post(userLogin);

router.route('/logout').get(userLogout);

router.route('/:id')
    .get(isLoggedIn, viewProfile)
    .put(isLoggedIn, updateProfile)


//admin routes
router.route('/admin/users').get(isLoggedIn, customRole('admin'), adminGetAllUsers)

router.route('/admin/user/:id')
    .get(adminGetUserById)
    .delete(adminDeleteUserById)

module.exports = router;