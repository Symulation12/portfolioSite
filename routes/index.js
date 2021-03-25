var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: "Sym's Archive"});
});

router.get('/projects/*', function(req, res) {
  var project = req.originalUrl.split('/').slice(-1).pop();
  res.render(`projects/${project}`, {title: project});
  
});

module.exports = router;
