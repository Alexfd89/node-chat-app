var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    //Sending event to the server
    // socket.emit('createEmail', {
    //     to: 'Server@mail.com',
    //     text: 'Hey, This is Client',
    //     from: 'Client@mail.com'
    // });
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(newMessage){
    console.log('New Message', newMessage);
    var li = $('<li></li>');
    li.text(`${newMessage.from}:  ${newMessage.text}`);
    $('#messages').append(li);

});

// socket.emit('createMessage', {
//     from: 'Alex',
//     text: 'Message'
// }, function(msg) {
//     console.log(msg);
// });


jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function(){
        
    });

    $('#message-form input').val('');
});