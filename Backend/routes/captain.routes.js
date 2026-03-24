const express = require('express');
const Router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/register',[
    body('email').isEmail(),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1 person'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be car, bike or auto')
],
    captainController.registerCaptain
);

Router.post('/login',[
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
);

Router.get('/profile', authMiddleware.authCaptain ,  captainController.getCaptainProfile);

Router.get('/logout', authMiddleware.authCaptain,  captainController.logoutCaptain);

module.exports = Router;