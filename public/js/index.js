var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    //Sending event to the server
    socket.emit('createEmail', {
        to: 'Server@mail.com',
        text: 'Hey, This is Client',
        from: 'Client@mail.com'
    });
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(newMessage){
    console.log('New Message', newMessage);
});

socket.on('newEmail', function(email){
    console.log('New Email', email);
});