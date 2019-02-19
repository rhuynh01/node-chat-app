var socket = io();

socket.on('connect', function ()  {
  console.log('Connected to server')

   socket.emit('createMessage', {
    from: 'client@gmail.com',
    text: 'justs sent a message from client'
  })
})

socket.on('newMessage', function (message) {
  console.log('Got new message: ', message)
})

socket.on('disconnect', function () {
  console.log('Disconnected from server')
})

