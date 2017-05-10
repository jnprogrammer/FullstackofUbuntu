require('./sayHi.js');

var question = require('./talk/question');
var goodbye = require("./Talk/goodBye");
var talk = require('./Talk');

talk.intro();
talk.hello("Josh");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

goodbye();