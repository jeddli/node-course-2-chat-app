var socket = io();

// ES6 arrow function may not be supported except crome.
socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'jed',
        text: 'Yup, that works for me'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});