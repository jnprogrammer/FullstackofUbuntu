var fs = require('fs');

var onFileLoad = function(err,file){
    console.log("Got the file in a cooler way");
}
console.log("Going to get a file");
fs.readFile('readFileSync.js',onFileLoad);


console.log("App continuddnndgitess...");