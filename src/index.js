const express = require('express');
const Route = express.Router();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const authorRoutes = require('./routes/author');
const genreRoutes = require('./routes/genre');
const bookRoutes = require('./routes/book');
const historyRoutes = require('./routes/history');

Route
    .use('/auth', authRoutes)
    .use('/user', userRoutes)
    .use('/author', authorRoutes)
    .use('/genre', genreRoutes)
    .use('/book', bookRoutes)
    .use('/history', historyRoutes)

module.exports = Route;
