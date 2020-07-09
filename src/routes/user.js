const express = require('express');
const Route = express.Router();
const userControllers = require('../controllers/user');

const { authentication } = require('../middleware/auth');
const { multer } = require('../middleware/multer');

Route
    .get('/:id', authentication, userControllers.getUserById)
    .put('/:id', authentication, multer, userControllers.putUser)

module.exports = Route;
