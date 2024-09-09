document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    const messageBoard = document.getElementById('message-board');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageBoard.appendChild(messageElement);
    document.getElementById('message').value = '';
});