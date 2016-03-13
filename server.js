/**
 * Created by Ale on 3/12/16.
 */
var request = require('request');
var cheerio = require('cheerio');

request('http://www.nytimes.com/section/us?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=U.S.&WT.nav=page', function(error, response, html) {
  var $ = cheerio.load(html);
  var result = [];

  $(".stream-supplemental").each(function(i, element) {

  });
  console.log(result);
});