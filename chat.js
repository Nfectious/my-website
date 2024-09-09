document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const chatMessage = document.getElementById('chat-message').value;
    const chatBox = document.getElementById('chat-box');
    const chatElement = document.createElement('div');
    chatElement.textContent = chatMessage;
    chatBox.appendChild(chatElement);
    document.getElementById('chat-message').value = '';
});