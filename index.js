const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
  console.log("Connected");
  io.emit('broadcast', '[Server]: Welcome!');

  socket.on('message', (msg) => {
    console.log("message: " + msg);
    socket.broadcast.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log("Disconnected");
    io.emit('broadcast', '[Server]: Good bye!');
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on port 3001');
});