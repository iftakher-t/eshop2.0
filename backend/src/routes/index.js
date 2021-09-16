var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// login
router.get('/login', function(req, res, next) {
  res.render('login');
});

// form 
router.get('/add', function(req, res, next) {
  res.render('forms');
});

// login
router.get('/view', function(req, res, next) {
  res.render('tables');
});

module.exports = router;
