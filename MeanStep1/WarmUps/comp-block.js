var child_process = require('child_process');

console.log(1);

//DO NOT BLOCK PROCESSES WITH COMPUTATIONAL FUNCTIONS !!
var newProcess = child_process.spawn('node',['fib.js'],{
    stdio:'inherit'
});
//require('./fib.js');

console.log(2);