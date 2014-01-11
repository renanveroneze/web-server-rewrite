// server.js

function init() {

    //
    // Requires Node API
    // look http://nodejs.org/api/
    //

    var http = require('http'),
        color = require('./color.js'),
        request_process = require('./request-process.js'),
        port = process.argv[2] || 1234;


    //
    // Create Server
    //

    function requests( req, res ) {

        if( req.url == '/close' ) { server.close(); process.exit(1); }

        var rp = request_process( req.url );

        if( rp.status == 200) {

            res.writeHead( 200, rp.content_type );
            res.write( rp.content );
            res.end();

            console.log('\nRequest Success: '.grey + req.url );

        } else if( rp.status == 404 ) {

            res.writeHead(404);
            res.write('Not Found!');
            res.end();

            console.log('\n404 - ERROR: '.red + req.url );

        }

    };

    var server = http.createServer( requests ).listen( port );


    //
    // Welcome Message
    //

    console.log(' _       __     __        _____'.green );
    console.log('| |     / /__  / /_      / ___/___  ______   _____  _____'.green );
    console.log('| | /| / / _ \\/ __ \\     \\__ \\/ _ \\/ ___/ | / / _ \\/ ___/'.green );
    console.log('| |/ |/ /  __/ /_/ /    ___/ /  __/ /   | |/ /  __/ /'.green );
    console.log('|__/|__/\\___/_.___/____/____/\\___/_/    |___/\\___/_/'.green );
    console.log('                 /_____/ v.0.1.5 by Renan Veroneze'.green );
    console.log('\n=> Listen http://localhost:'.blue + '\x1B[34m\x1B[1m\x1B[4m\x1B[5m' + port + '\x1B[39m\x1B[0m' );

};

exports.init = init;



