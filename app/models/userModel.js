/**
 * Created by syu on 9/5/16.
 */
/**
 * Created by syu on 8/28/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String
});

var userModel = mongoose.model('userModel', UserSchema);

module.exports = userModel;