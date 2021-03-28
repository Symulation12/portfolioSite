var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: "Sym's Archive"});
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
