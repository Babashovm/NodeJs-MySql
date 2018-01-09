var express = require('express');
var router = express.Router();

// public Routing
router.get('/', function (req, res) {
  res.render('index', { layout: 'layout' });
})
// define the post route
router.get('/post', function (req, res) {
  res.render('post', { layout: 'layout' });
})

//404 public view error page
router.get('/*',(req,res)=>{

	res.render('404', { layout: 'layout' });
});

// =================================================================

// define the admin home page route
router.get('/admin/', function (req, res) {
  res.render('index');
})


//404 admin error page
router.get('/admin/*',(req,res)=>{

	res.render('404', { layout: 'layout' });
});

module.exports = router;