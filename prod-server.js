'use strict';
let express = require('express');

var app = express();
app.use('/', express.static(__dirname + '/dist'));
app.use('*', express.static(__dirname + '/dist'));

var listener = app.listen(process.env.PORT || 5000, function() {
  var host = listener.address().address;
  var port = listener.address().port;

  console.log('FastBoot running at http://' + host + ":" + port);
});
