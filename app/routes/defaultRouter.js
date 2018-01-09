var express = require('express');
var router = express.Router();

// public Routing
router.get('/', function (req, res) {
  res.render('index');
})
// define the post route
router.get('/post', function (req, res) {
  res.render('post');
})



// =================================================================

// define the admin home page route
router.get('/admin', function (req, res) {
  res.render('../admin/index',{ layout: '../admin/layout' });
});
//Login Post
router.post('/admin',(req,res)=>{

	res.send(req.body);
})

//admin register
router.get('/admin/register',(req,res)=>{

	res.render('../admin/register',{ layout: '../admin/layout' });
})





// ======================En Altda Qalmalidirlar==========================

//404 admin error page
router.get('/admin/*',(req,res)=>{

	res.render('../admin/404',{ layout: '../admin/layout' });
});
//404 public view error page
router.get('/*',(req,res)=>{

	res.render('404', { layout: 'layout' });
});

module.exports = router;