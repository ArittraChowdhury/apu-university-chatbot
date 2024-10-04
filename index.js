$(document).ready(function() {
    // Example function to send data to the server
    function sendChatToServer(message, response) {
      $.ajax({
        url: 'http://localhost:3000/log-message', // URL to your Node.js backend
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          userId: 'user123', // Example user ID
          timestamp: new Date().toISOString(),
          message: message,
          response: response
        }),
        success: function(data) {
          console.log('Data logged to DynamoDB:', data);
        },
        error: function(error) {
          console.error('Error logging data:', error);
        }
      });
    }

    // Example of manually sending a message
    $('#sendBtn').click(function() {
      var message = $('#messageInput').val(); // Assuming you have an input field for messages
      var response = "Example response"; // This would be the actual response from the chatbot
      sendChatToServer(message, response);
    });
  });