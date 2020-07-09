const express = require('express');
const Route = express.Router();
const historyControllers = require('../controllers/history');

const { authentication } = require('../middleware/auth');

Route
    .get('/', authentication, historyControllers.getHistory)
    .get('/user/:userId', authentication, historyControllers.getHistoryByUserId)
    .post('/', authentication, historyControllers.postHistory)

module.exports = Route;
