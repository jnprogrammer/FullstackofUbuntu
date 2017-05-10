require('./sayHi.js');
var question = require('./talk/question');
var goodbye = require("./Talk/goodBye");
var talk = require('./Talk');
talk.intro();
talk.hello("Josh");
goodbye();