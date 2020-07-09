const express = require('express');
const Route = express.Router();
const authorControllers = require('../controllers/author');

const { authentication } = require('../middleware/auth');

Route
    .get('/', authentication, authorControllers.getAuthor)
    .get('/:id', authentication, authorControllers.getAuthorById)
    .post('/', authentication, authorControllers.postAuthor)
    .put('/:id', authentication, authorControllers.putAuthor)
    .delete('/:id', authentication, authorControllers.deleteAuthor)

module.exports = Route;
