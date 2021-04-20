var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: "Sym's Archive"});
});


router.get('/files/*', function(req,res,next) {
  fs.readFile('public/files/' + req.url, function(err, data) {
    if (err) {
      next();
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});


router.get('/projects/*', function(req, res, next) {
  var project = req.originalUrl.split('/').slice(-1).pop();
  var path = `projects/${project}`;
  res.render(path, {title: project}, function(err, html)
  {
    if(err)
    {
      next();
      return;
    }
    res.send(html);
  });
});

module.exports = router;
