var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';
mongoose.Promise = global.Promise;

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
    console.log('Mongoose connected to Something at '+dburl);
});

mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected, yes this got called too ');
});

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error: '+ err);
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through app termination (SIGINT)');
        process.exit(0);
    });
});

process.on('SIGTREM',function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through app termination (SIGTREM)');
        process.exit(0);
    }); 
});

process.once('SIGUSR2',function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through app termination (SIGUSR2)');
        process.kill(process.pid,'SIGUSR2');
    });
});

//bring in schemas and models s

require('./hotels.model.js');