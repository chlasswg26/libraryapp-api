const express = require('express');
const Route = express.Router();
const bookControllers = require('../controllers/book');

const { authentication, authorization } = require('../middleware/auth');
const { multer } = require('../middleware/multer');
const { cache } = require('../middleware/redis');

Route
    .get('/', bookControllers.getBook)
    .get('/:id', bookControllers.getBookById)
    .get('/user/:userId', authentication, bookControllers.getBookByUser)
    .post('/filter', cache, bookControllers.getBookByFilter)
    .post('/', authentication, authorization, multer, bookControllers.postBook)
    .put('/:id', authentication, multer, bookControllers.putBook)
    .delete('/:id', authentication, authorization, bookControllers.deleteBook)

module.exports = Route;
