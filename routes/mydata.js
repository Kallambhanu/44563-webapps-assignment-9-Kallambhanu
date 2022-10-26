var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kallam Venkata Bhanu Prakash Reddy' });
});

module.exports = router;
