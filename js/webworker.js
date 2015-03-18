// var onmessage = function(e){
// 	self.postMessage('Doing great from this external file!', e);
// };


// // Post data straight back to client
// self.addEventListener('message', function(e){
// 	self.postMessage(e.data);
// });


// Create a 1000mb array...
var uInt8View = new Uint8Array(1024*1024*1000);
for ( var i = 0; i < uInt8View.length; i++){
	uInt8View[i] = i;
}

// and send it to the client (cloned if no 2nd argument)
self.postMessage(uInt8View.buffer, [uInt8View.buffer])