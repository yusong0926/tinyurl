/**
 * Created by syu on 8/28/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
    shortUrl: String,
    longUrl: String,
    username: String,
});

var urlModel = mongoose.model('urlModel', UrlSchema);

module.exports = urlModel;