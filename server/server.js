'use strict';

var express        = require('express'),
    path           = require('path'),
    config         = require('config');


// initialize models
require(path.resolve(__dirname, 'models'));


var app = express();
app.configure(function () {
  
  // bodyparser
  app.use(express.urlencoded());
  app.use(express.json());
  
  // server
  app.engine('.html', require('ejs').renderFile);
  app.use(app.router);
  
  if (config.mountDist) {
    var distFolder = path.resolve(__dirname, '../dist');
    app.set('views', distFolder);
    app.use(express.static(distFolder));
  } else {
    var appFolder = path.resolve(__dirname, '../app'),
        buildFolder = path.resolve(__dirname, '../.build');
    app.set('views', appFolder);
    app.use(express.static(appFolder));
    app.use(express.static(buildFolder));
  }
  
});




// webpage

var index = require('./routes/index');
app.get('/index.html', function (req, res) {
  res.redirect('/');
});

app.get('/', index.render);





module.exports = app;
