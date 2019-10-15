var WebSocketServer = require('websocket').server;
var http = require('http');
var axios = require('axios');
 
var server = http.createServer(function(request, response) {

});
server.listen(8081, function() {
    console.log((new Date()) + ' Server is listening on port 8081');
});
 
wsServer = new WebSocketServer({
    httpServer: server
});

 
wsServer.on('request', function(request) {
    
    var connection = request.accept(null, request.origin);
    connection.on('message', function(message) {
		console.log(JSON.parse(message.binaryData));
		
		var sinal = JSON.parse(message.binaryData);
		
		axios.post('https://qbf1dpwcq9.execute-api.sa-east-1.amazonaws.com/dev/signals', {'signal': sinal})
			.then(resp => {
				console.log(resp.status)
			});
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});