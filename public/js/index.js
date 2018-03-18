/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
/* eslint-disable no-undef */


const socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'Steve',
    text: 'Hey! This is me.',
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
