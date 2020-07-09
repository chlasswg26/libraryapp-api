const express = require('express');
const Route = express.Router();
const apicache = require('apicache-plus');
const redis = require('redis');
const bookControllers = require('../controllers/book');

const { authentication, authorization } = require('../middleware/auth');
const { multer } = require('../middleware/multer');
const cacheWithRedis = apicache.options({
  redisClient: redis.createClient({ detect_buffers: true }),
});
const onlyStatus200 = (req, res) => res.statusCode === 200;

Route
    .get('/', cacheWithRedis('5 minutes', onlyStatus200), bookControllers.getBook)
    .get('/:id', authentication, bookControllers.getBookById)
    .get('/user/:userId', authentication, bookControllers.getBookByUser)
    .post('/filter', authentication, bookControllers.getBookByFilter)
    .post('/', authentication, authorization, multer, bookControllers.postBook)
    .put('/:id', authentication, multer, bookControllers.putBook)
    .delete('/:id', authentication, authorization, bookControllers.deleteBook)

module.exports = Route;
