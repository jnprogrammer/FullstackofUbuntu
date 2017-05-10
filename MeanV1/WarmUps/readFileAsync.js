var fs = require('fs');

console.log("Goign to get a file");
fs.readFile('readFileSync.js',function(err,file){
console.log("Got the file");
});

console.log("App continuess...");