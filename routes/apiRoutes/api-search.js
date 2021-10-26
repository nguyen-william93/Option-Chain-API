const router = require('express').Router();
const cheerio = require('cheerio');
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('hello');
});

module.exports = router;