require("http-proxy").createServer({
	target: 'ws://www.multiplayerpiano.com:443',
	ws: true
}).listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);