/**
 * Created by Ale on 3/13/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Notes = new Schema({
  thenote: {
    type: String
  }
});

var notes = mongoose.model('notes', Notes);
module.exports = notes;