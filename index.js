const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// app.use(express.static('build'));
app.use(express.static(__dirname + '/frontend/build'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// let number = 1;
// setInterval(() => {
//   number += 1;
//   console.log(number)
//   io.sockets.emit('apiCall', number);
// }, 2000);

io.on('connect', socket => {
  let username = '';

  socket.on('join', user => {
    username = user;
    socket.broadcast.emit('join', `${user} joined the chat.`);
  });

  socket.on('message', msg => {
    console.log("MESSAGE:");
    console.log(msg);
    socket.broadcast.emit('message', msg);
  });

  socket.on('chatbot', msg => {
    socket.emit('message', msg);
  });

  socket.on('update_user_list', username => {
    socket.emit('update_user_list', username)
  });

  socket.on('disconnect', () => {
    console.log("DISCONNECT");
    socket.broadcast.emit('message', `${username} left the chat.`);
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on port 3001');
});