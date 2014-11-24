'use strict'

process.env.WUNDERAPI = '7c72c8180ca33938';

var chai = require ('chai');
var chaihttp = require ('chai-http');
var expect = chai.expect;
chai.use (chaihttp);

require ('./server.js');

var url = 'http://localhost:3000';

describe ('determining if it\'s cold enough to store my beer outside', function () {
  it('should get a message about my local weather\'s beer storing ability', function (done) {
    chai.request(url)
    .get('/')
    .end (function (err, res) {
      expect (err).to.eql(null);
      expect (res.body.msg).to.eql ("Yep, throw that shit outside");
      done ();
    });
  });
});


