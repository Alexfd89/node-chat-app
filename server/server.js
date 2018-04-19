
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    //Sending event to Client
    socket.emit('newEmail', {
        from: 'Server@mail.com',
        to: 'Client@mail.com',
        text: 'Hey, Whats going on?',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'Server@mail.com',
        text: 'Hey Client, this is a new message from the server',
        createdAt: new Date()
    });

    //Getting event from the client
    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});