/**
 * Created by Ale on 3/12/16.
 */
var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

var bodyParser = require('body-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

var PORT = process.env.PORT || 8000;

//var mongojs = require('mongojs');
//var databaseUrl = "scraper";
//var collections = ["nytData"];
//var db = mongojs(databaseUrl, collections);
//db.on('error', function(err) {
//  console.log('Database Error:', err);
//});


app.get('/', function(req, res){
  request('http://www.nytimes.com/section/us?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=U.S.&WT.nav=page', function(error, response, html) {
    var $ = cheerio.load(html);
    var result = [];

    $(".stream-supplemental .story-menu.theme-stream.initial-set").each(function(i, element) {

      var articleLink = $(element).find(".story-link").attr('href');
      var headline = $(element).find(".headline").text();
      var summary = $(element).find(".summary").text();

      result.push({
        headline: headline,
        articleLink: articleLink,
        summary: summary
      })
    });

    console.log(result);
  });

  res.send("Scrape Complete");
});

app.listen(PORT, function() {
  console.log('App running on port %s', PORT);
});