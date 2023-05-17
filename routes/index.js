var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Yarn Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Yarn Register' });
});

module.exports = router;
