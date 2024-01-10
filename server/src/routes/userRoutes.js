const express = require('express');
const { 
    signup, 
    login, 
    logout, 
    forgotPassword,
    resetPassword,
    viewProfile, 
    updateProfile,
    changePassword,
    adminGetAllUsers,
    adminGetOneUser,
    adminUpdateOneUser,
    adminDeleteOneUser,
} = require('../controllers/userController');
const { 
    isLoggedIn, 
    customRole
} = require('../middlewares/user');

const router = express.Router();

/**
 * User routes
 */
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/forgotpassword').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/profile').get(isLoggedIn, viewProfile);
router.route('/updateprofile').put(isLoggedIn, updateProfile);
router.route('/changepassword').put(isLoggedIn, changePassword);

/**
 * Admin routes
 * 1. View all users
 * 2. View one user 
 * 3. Update one user
 * 4. Delete user
 */
router.route('/admin/users').get(isLoggedIn, customRole('admin'), adminGetAllUsers)

router.route('/admin/users/:id')
    .get(adminGetOneUser)
    .put(adminUpdateOneUser)
    .delete(adminDeleteOneUser)

module.exports = router;