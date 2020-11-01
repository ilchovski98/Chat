<!-- Front End -->

//Make connection
const socket = io.connect('http://localhost:4000');

//Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

//Emit Events
btn.addEventListener('click', function() {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

//Listen for events
socket.on('chat', function(data) {
	output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});