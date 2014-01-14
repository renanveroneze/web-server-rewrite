/*
 *
 * Web Server RW
 * Simple HTTP server, with rewrite options
 *
 * Created and developed by Renan Veroneze
 *
 */

module.exports = function() {


    //
    // Node.js requires
    // look at http://nodejs.org/api/globals.html#globals_require
    //

    var http = require('http'),
        fs = require('fs'),
        argv = require('./argv.js'),
        requests = require('./requests.js');


    //
    // Variables
    //

    var pkg = JSON.parse( fs.readFileSync('package.json') ),
        version = pkg.version,
        options = argv.resolve( arguments );


    //
    // Exec and process on receive HTTP requests
    //

    var on_request = function( req, res ) {

            var rq = requests( req.url,  options.base || '' ); // => Call process request

            if( rq.status == 200 ) {

                res.writeHead(200, rq.content_type );
                res.write( rq.content );

                msg = '\x1B[90mRequest success: ' + req.url + '\x1B[39m'

            } else {

                res.writeHead(400);
                res.write('Not found!');

                msg = '\x1B[31mERROR: file not exists => ' + req.url + '\x1B[39m'

            }

            res.end();

            console.log(msg);

            if( req.url == '/close' ) {

                server.close();
                process.exit(1);

            }

        },


        //
        // Server Start
        //

        server = http.createServer( on_request ).listen( options.port || 1234 );


        //
        // On exit, close server.
        //

        process.stdin.resume();
        process.on('SIGINT', function() {

            server.close();
            process.exit(1);

        });


        //
        // Welcome Message
        //

        console.log('\x1B[32m _       __     __        _____');
        console.log('| |     / /__  / /_      / ___/___  ______   _____  _____');
        console.log('| | /| / / _ \\/ __ \\     \\__ \\/ _ \\/ ___/ | / / _ \\/ ___/');
        console.log('| |/ |/ /  __/ /_/ /    ___/ /  __/ /   | |/ /  __/ /');
        console.log('|__/|__/\\___/_____/____/____/\\___/_/    |___/\\___/_/');
        console.log('                 /_____/ v.' + version + ' by Renan Veroneze\x1B[39m');
        console.log('\n\x1B[34m\x1B[1m=> Listen http://localhost:' + (options.port || 1234) + '\x1B[0m' );
        console.log('\n\x1B[31mTo close: CTRL + C\x1B[39m\n');

}