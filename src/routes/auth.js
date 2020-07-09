const express = require('express');
const Route = express.Router();
const authControllers = require('../controllers/auth');

const { authentication, authRefreshToken } = require('../middleware/auth');

Route
    .post('/register', authControllers.postRegister)
    .post('/login', authControllers.postLogin)
    .post('/verify', authControllers.postVerify)
    .post('/token', authentication, authRefreshToken, authControllers.postRefreshToken)

module.exports = Route;
