const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Generate a random name for the user
const randomName = `User${Math.floor(Math.random() * 1000)}`;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        const message = `${randomName}: ${input.value}`;
        socket.emit('chat message', message);
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

setTimeout(() => {
    messages.innerHTML = '';
}, 10 * 60 * 1000); // Clear messages after 10 minutes
