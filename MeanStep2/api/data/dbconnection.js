var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel';

var _connection = null;

var open = function(){
    //set connection
    MongoClient.connect(dburl,function(err,db){
        if(err){
            console.log("DB connection has failed!!");
            return;
        }
        _connection = db;
        console.log("DB connection establised",db);
    });
};

var get = function(){
    return _connection;
};

module.exports = {
    open:open,
    get : get
};