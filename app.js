var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var path = require('path');
var _ = require('underscore');
var routings = require('./app/routes/defaultRouter');

//var sqlQueries = require('./sqlQueries');

var app = express();
var http = require('http').Server(app);
app.use(bodyParser.json());

//EJS Public Template Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app/views/public/'));
app.use(ejsLayouts);

//Public View Css,Javascripts,Images Folders
app.use('/public',express.static(path.join(__dirname,'public')));

//Admin Panel Router
app.use('/', routings);

http.listen(3333);
