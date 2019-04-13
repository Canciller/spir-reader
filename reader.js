var net = require('net');

var server = net.createServer();

const PORT = 3334,
      ADDRESS = '127.0.0.1';

console.clear();

server.on('connection', socket => {
    console.log(`Spir client connected at ${socket.remoteAddress}:${socket.remotePort}`)

    process.stdin.on('data', chunk => {
        socket.write(chunk.toString().trim());
    });

    socket.on('end', () => {
        process.stdin.removeAllListeners('data');

        console.log(`Spir client at ${socket.remoteAddress}:${socket.remotePort} disconnected`);
    });
});

server.listen(PORT, ADDRESS, () => {
    let address = server.address();
    console.log(`Spir reader listening at ${address.address}:${address.port}`);
});

process.on('SIGINT', () => {
    console.log('Caught interrupt signal exiting...');
    process.exit();
});
