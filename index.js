/*var http = require('http');
var config = require('./config');

// Create Express web app
var app = require('./webapp');

// Create an HTTP server and listen on the configured port
var server = http.createServer(app);
server.listen(config.port, function() {
  console.log('Express server listening on *:' + config.port);
});*/
var accountSid = 'TWILIO_ACCOUNT_SID'; // Your Account SID from www.twilio.com/console
var authToken = 'TWILIO_ACCOUNT_AUTH';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+917011760660',  // Text this number
    from: '+17544006230' // From a valid Twilio number
}, function(err, message) {
    if(err) {
        console.error(err.message);
    }
});