/**
 * Created by Ale on 3/12/16.
 */
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 8000;
var app = express();


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));


//Database configuration
mongoose.connect('mongodb://localhost/week18day3mongoose');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});


//Require Schemas
var NYTData = require('./models/theNytData.js');


app.get('/', function(req, res){
  request('http://www.nytimes.com/section/us?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=U.S.&WT.nav=page', function(error, response, html) {
    var $ = cheerio.load(html);

    $(".stream-supplemental .latest-panel .story-menu.theme-stream.initial-set li").each(function(i, element) {

      var articleLink = $(element).find(".story-link").attr('href');
      var headline = $(element).find(".headline").text();
      var summary = $(element).find(".summary").text();

      console.log(articleLink);

      var insertedNYTData = new NYTData({
        "headline": headline,
        "articleLink": articleLink,
        "summary": summary
      });
      insertedNYTData.save(function(err, doc) {
        if (err) {
          console.log(err);
        }
      });
    });

    res.sendfile(process.cwd() + '/index.html')
  });
});


app.get('/displayInfo', function(req, res) {

  NYTData.find({}, function(err, thedata) {
    if(err) {
      throw err;
    }

    res.json(thedata);
  })
});


app.listen(PORT, function() {
  console.log('App running on port %s', PORT);
});