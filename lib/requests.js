// => requests.js

module.exports = function( request, base, post ) {


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

    var request = rewrite( request, base );

    var request_name = request.replace(/\?(.*)/g, ''),
        request_argv = ' get_' + request.replace(/(.*)\?/g, '').split('&').join(' get_'),
        request_argv = request_argv == ' ' + request_name ? '' : request_argv,
        post_argv = ' ' + post.split('&').join(' ');
        output = {};


    if( fs.existsSync( base + request_name ) ) {

        output.status = 200
        output.mime = mime( request_name );

        if( request_name.split('.').pop() === 'php' ) {

            output.content = exec_sync.exec('php -f ' + base + request_name + request_argv + post_argv ).stdout;

        } else {

            output.content = fs.readFileSync( base + request_name );

        }

    }


    return output;




};