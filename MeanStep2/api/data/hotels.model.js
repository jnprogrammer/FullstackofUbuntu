var mongoose = require('mongoose');
var hotelSchema = new mongoose.Schema({
    name : String,
    stars : Number,
    services : [String],
    discription : String,
    photos : [String],
    currency : String
});