const io = require('socket.io-client');

let socket = io.connect('http://localhost:3001',{reconnect :true});

socket.on('connect',function(){
    console.log("\n\nSocket connected  from NodeJs\n\n");
})
module.exports= socket