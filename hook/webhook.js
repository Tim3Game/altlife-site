const { exec } = require('child_process');
const fs = require('fs');
const http = require('http');
const createHandler = require('github-webhook-handler');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '/config.json')));
const handler = createHandler({ path: '/webhook', secret: config.secret });

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
    exec('git pull origin master', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(stdout);
        console.log(stderr);
    });
});
