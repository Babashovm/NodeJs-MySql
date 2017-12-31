var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var path = require('path');
var _ = require('underscore');

//var sqlQueries = require('./sqlQueries');

var app = express();
app.use(bodyParser.json());

//EJS Public Template Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app/views/public'));

app.use(ejsLayouts);


app.use('/public',express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
res.render('index')
});

app.get('/admin',function(req,res){
	res.render('index')
});

app.get('/post',function(req,res){
	res.render('post');
});

// app.post('/register',function(req,res){
// let body = _.pick(req.body,"name","surname");
// res.send(body.name + " " + body.surname);
// })

app.listen(3333);
