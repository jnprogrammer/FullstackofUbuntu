var express = require('express');
var router = express.Router();

router
.route('/hotels')
.get(function(req,res){
    console.log("GET the jsonz");
    res
        .status(200)
        .json({"jsonData" : true});

});

module.exports = router;