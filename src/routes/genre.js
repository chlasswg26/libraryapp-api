const express = require('express');
const Route = express.Router();
const genreControllers = require('../controllers/genre');

const { authentication } = require('../middleware/auth');

Route
    .get('/', authentication, genreControllers.getGenre)
    // .get('/:id', authentication, genreControllers.getGenreById)
    .post('/', authentication, genreControllers.postGenre)
    .put('/:id', authentication, genreControllers.putGenre)
    .delete('/:id', authentication, genreControllers.deleteGenre)

module.exports = Route;
