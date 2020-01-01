var fs = require('fs');
var http = require('http');
var createHandler = require('github-webhook-handler');
var path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '/config.json')));
var handler = createHandler({ path: '/webhook', secret: config.secret });

http.createServer(function(req, res) {
    handler(req, res, function(err) {
        res.statusCode = 404;
        res.end('no such location');
    });
}).listen(7777);

handler.on('error', function(err) {
    console.error('Error:', err.message);
});

handler.on('push', function(event) {
    console.log(
        'Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref
    );
});

handler.on('issues', function(event) {
    console.log(
        'Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title
    );
});
