/**
 * Created by Ale on 3/12/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NYTSchema = new Schema({
  headline: {
    type:String
  },
  articleLink: {
    type:String
  },
  summary: {
    type:String
  }
});

var thenytData = mongoose.model('nytData', NYTSchema);
module.exports = thenytData;