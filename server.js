const express = require('express');
const bodyParser = require('body-parser')
const sqlite3= require('sqlite3');
const Sequelize  = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');
const socketio= require('socket.io');

const app = express();

const taskRouters = require('./routes/tasks_routes');
const categoriesRouter = require('./routes/categories_router');
const registrationRouters = require('./routes/registrations_router');
const sessionsRouter =require('./routes/session_router');
const findUserMiddleware = require('./middlewares/find_user');
const authUserMiddleware = require('./middlewares/auth_user');
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use(session({
    secret: ['123wrwczcsfzvxvasdca','123ojsdfshsfsdf'],
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
  }));

app.use(findUserMiddleware);
app.use(authUserMiddleware);
app.use(taskRouters);
app.use(registrationRouters);
app.use(sessionsRouter);
app.use(categoriesRouter);

app.get('/',function(req,res){
    res.render('home',{user :req.user})
});

let server = app.listen(process.env.PORT || 3001);

let io = socketio(server);
let sockets={};
let userCount = 0 ;
io.on('connection',function(socket){
  // Mostrar las tareas generadas por el mismo usuario

  let userId = socket.request._query.loggeduser;
  if(userId) sockets[userId] = socket;
  console.log(sockets);

  userCount++;
  io.emit('count_updated',{count:userCount});

  socket.on('new_task',function(data){
    if(data.userId){
      let userSocket = sockets[data.userId];
      if(!userSocket) return;

      userSocket.emit('new_task',data);
    }
    
  })


    
    socket.on('disconnect',function(){
      Object.keys(sockets).forEach(userId=>{
        let s = sockets[userId];
        if(s!=null){
          if(s.id == socket.id) sockets[userId] = null
        }
      })

      console.log(sockets);
      userCount--;
      io.emit('count_updated',{count:userCount})
    })
})

const client = require('./realtime/client')