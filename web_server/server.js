
var ws = function( req, res ) {

    var type = content_type( req.url ),
        file = req.url;

    if(req.url == '/close') {
        server.close();
        res.end();
    }

    if(!type) {

        file = url_rewrite( req.url );
        type = content_type( file );

    }

    try {

        file = fs.readFileSync('../web_static/' + path.normalize( file ) );
        code = 200;

    } catch ( e ) {

        file = '404 - Not Found!';
        code = 404;

    }

    res.writeHead( code, type );
    res.write(file);

    res.end();

};

var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    content_type = require('./content_types.js'),
    url_rewrite = require('./url_rewrite.js'),
    server = http.createServer(ws).listen('1234');


console.log(' _       __     __        _____');
console.log('| |     / /__  / /_      / ___/___  ______   _____  _____');
console.log('| | /| / / _ \\/ __ \\     \\__ \\/ _ \\/ ___/ | / / _ \\/ ___/');
console.log('| |/ |/ /  __/ /_/ /    ___/ /  __/ /   | |/ /  __/ /');
console.log('|__/|__/\\___/_.___/____/____/\\___/_/    |___/\\___/_/');
console.log('                 /_____/');
console.log('\n=> Listen http://localhost:1234');
