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
    type:String,
    unique:true
  },
  summary: {
    type:String
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'notes'
  }]
});

var thenytData = mongoose.model('nytData', NYTSchema);
module.exports = thenytData;