require("http-proxy").createServer({
	target: 'wss://www.multiplayerpiano.com',
	ws: true
}).listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
