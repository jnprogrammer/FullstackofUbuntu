var express = require('express');
var router = express.Router();

router
.route('/json')
.get(function(req,res){
    console.log("GET the jsonz");
    res
        .status(200)
        .json({"jsonData" : true});
})
.post(function(req,res){
    console.log("POST the jsonz");
    res
        .status(200)
        .json({"jsonData" : "Post Received"});
});

module.exports = router;