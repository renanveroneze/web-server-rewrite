// => requests.js

module.exports = function( request, base ) {

    var fs = require('fs'),
        rewrite = require('./rewrite.js'),
        request = request.replace(/\?(.*)/, ''),
        ctype = require('./ctype.js'),
        ext = request.split('.')[1],
        output = {};

    if( !ext ) { request = rewrite( request, base ); }
    else { request = request.slice(1); }

    if( fs.existsSync( base + request ) ) {

        output.status = 200;
        output.content_type = ctype( request );
        output.content = fs.readFileSync( base + request );

    }

    return output;


};