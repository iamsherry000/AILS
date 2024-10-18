var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// API endpoint
router.get('/api/hello', function(req, res, next) {
  res.json({ message: 'Hello from Backend!' });
});

module.exports = router;
