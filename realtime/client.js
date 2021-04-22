const io = require('socket.io-client');
let host =  'http://localhost:3001';
if(process.env.NODE_ENV && process.env.NODE_ENV =='production'){
    host = 'https://calm-temple-54932.herokuapp.com/';
  }
let socket = io.connect(host,{reconnect :true});

socket.on('connect',function(){
    console.log("\n\nSocket connected  from NodeJs\n\n");
})
module.exports= socket