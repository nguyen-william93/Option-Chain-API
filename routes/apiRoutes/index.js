const router = require('express').Router();

const searchRoutes = require('./api-search');

router.use('/search', searchRoutes);

module.exports = router;