var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    res.send('Admin home page');
});

module.exports = router;