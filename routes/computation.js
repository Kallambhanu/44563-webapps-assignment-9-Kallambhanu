var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.random();
    var hypot = Math.hypot(x);
    var celi = Math.ceil(x);
    var clz32 = Math.clz32(x);
  res.render('computation', { title: 'Express',x:x,hypot:hypot,celi:celi,clz32:clz32 });
  
});

module.exports = router;
