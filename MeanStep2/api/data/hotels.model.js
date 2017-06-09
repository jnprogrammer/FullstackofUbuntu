var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    raiting : {
        type : Number,
        min : 0,
        max : 5,
        required : true 
    },
    review:{
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        "default" : Date.now
    }

}); 

var roomSchema = new mongoose.Schema({
    type : String,
    number : Number,
    description : String,
    photos : [String],
    price : Number
});
var hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        min : 0,
        max : 5,
        default : 0   
    },
    services : [String],
    discription : String,
    photos : [String],
    currency : String,
    reviews : [reviewSchema],
    rooms : [roomSchema],
    location : {
        address : String,
        //always store coordinates long (e/w) , lat (n,s)
        coordinates : {
            type : [Number],
            index : '2dsphere'
        }
    }
});

mongoose.model('Hotel',hotelSchema);