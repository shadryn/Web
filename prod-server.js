'use strict';

let express = require('express');
//let fastbootMiddleware = require('fastboot-express-middleware');

var app = express();
app.use('/', express.static(__dirname + '/dist'));

//app.get('/*', fastbootMiddleware(express.static(__dirname + '/dist')));

var listener = app.listen(process.env.PORT || 5000, function() {
  var host = listener.address().address;
  var port = listener.address().port;

  console.log('FastBoot running at http://' + host + ":" + port);
});
