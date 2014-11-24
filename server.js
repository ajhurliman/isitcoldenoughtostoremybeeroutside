/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var request = require('superagent');

app.get('/', function(req, res) {
  var wunderUrl = 'http://api.wunderground.com/api/' +
  process.env.WUNDERAPI +
  '/' +
  'conditions/' +
  'q/' +
  'autoip/' +
  '.json';

  request
  .get(wunderUrl)
  .end(function(err, wunderData) {
    var result;
    var tempF = wunderData.body.current_observation.temp_f;
    if (tempF < 45 && tempF >= 20) {
      result = "Yep, throw that shit outside";
    } else if (tempF < 20) {
      result = "Nah, shit's too cold man";
    } else {
      result = "Nope";
    }

    res.json({msg: result});
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server is running on port ' + app.get('port'));
});
