document.getElementById('sendButton').onclick = function() {
    var input = document.getElementById('messageInput');
    var message = input.value;
    if (message) {
        var messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        document.getElementById('messages').appendChild(messageDiv);
        input.value = '';
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    }
};
