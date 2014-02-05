// => requests.js

module.exports = function( request, base ) {


    //
    // Module Dependencies
    //

    var fs = require('fs'),
        exec_sync = require('execSync'),
        rewrite = require('./rewrite.js'),
        mime = require('./mime.js');



    //
    // Set Variables
    //

    var request = rewrite( request, base ),
        request_name = request.replace(/\?(.*)/g, ''),
        request_argv = ' ' + request.replace(/(.*)\?/g, '').split('&').join(' '),
        request_argv = request_argv == ' ' + request_name ? '' : request_argv,
        output = {};


    if( fs.existsSync( base + request_name ) ) {

        output.status = 200
        output.mime = mime( request_name );

        if( request_name.split('.').pop() === 'php' ) {

            output.content = exec_sync.exec('php -f ' + base + request_name + request_argv ).stdout;

        } else {

            output.content = fs.readFileSync( base + request_name );

        }

    }


    return output;




};