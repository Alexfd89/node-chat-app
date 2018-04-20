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

socket.on('newLocationMessage', function(message){
    var li = $('<li></li>');
    var a = $('<a target="_blank">My current location</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    $('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Alex',
//     text: 'Message'
// }, function(msg) {
//     console.log(msg);
// });


$('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function(){
        
    });

    $('#message-form input').val('');
});

let locationButton = $('#send-location');
locationButton.on('click', function(){
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function (position){

        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });

    }, function(){
        return alert('Unable to fetch location');
    });
});
