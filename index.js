const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// app.use(express.static('build'));
app.use(express.static(__dirname + '/frontend/build'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

var usersOnline = [];

io.on('connect', socket => {
  var username = '';

  socket.on('join', user => {
    usersOnline.push(user);
    username = user;
    socket.broadcast.emit('join', `${user} joined the chat.`);
    io.emit('usersOnline', usersOnline);
  });

  socket.on('message', (user, msg) => {
    socket.broadcast.emit('message', user, msg);
  });

  socket.on('disconnect', () => {
    usersOnline = usersOnline.filter(user => user !== username);
    socket.broadcast.emit('leave', `${username} left the chat.`);
    io.emit('usersOnline', usersOnline);
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on port 3001');
});