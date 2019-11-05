var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+' '+description);
});
router.post('/',function(req,res,next){
  res.render('index',{data: req.body});
});

module.exports = router;
