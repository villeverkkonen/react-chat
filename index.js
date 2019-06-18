const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('build'));
// app.use(express.static(__dirname + '/frontend/build'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {

  socket.on('join', (nickname) => {
    socket.broadcast.emit('join', 'Joined chat', nickname);
  });

  socket.on('message', (msg, nickname) => {
    socket.broadcast.emit('message', msg, nickname);
  });

  socket.on('disconnect', () => {
    
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on port 3001');
});