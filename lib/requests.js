// => requests.js

module.exports = function( request, base ) {


    //
    // Module Dependencies
    //

    var fs = require('fs'),
        rewrite = require('./rewrite.js'),
        mime = require('./mime.js');



    //
    // Set Variables
    //

    var request = request.replace(/\?(.*)/, ''),
        ext = request.split('.')[1],
        output = {};



    if( !ext ) { request = rewrite( request, base ); }
    else { request = request.slice(1); }

    request = (!ext) ? rewrite( request, base ) : request.slice(1);

    if( fs.existsSync( base + request ) ) {

        output.status = 200;
        output.mime = mime( request );
        output.content = fs.readFileSync( base + request );

    }

    return output;


};