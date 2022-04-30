var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET random-route page. */
router.get('/random-route', function(req, res, next) {
  res.render('index', { title: 'This should be a random hot reload?' });
});

module.exports = router;
