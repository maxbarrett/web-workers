var counter = 0;
var connections = [];

// Define onconnect handler that triggers when new SharedWorker() is invoked:

onconnect = function(eConn){
	var port = eConn.ports[0]; // unique port for this connection

	// tell connected clients when message is received:
	port.onmessage = function(eMsg){
		counter++;
		for (var i = 0; i < connections.length; i++){

		}
		connections[i].postmessage({
			msg 	: eMsg.data,
			counter	: counter
		});
	};

	port.start();
	connections.push(port);
};

onmessage = function(e){
	console.log(e)
}