// request_process.js

module.exports = function( req ) {

    var path = require('path'),
        fs = require('fs'),
        rewrite = require('./rewrite.js'),
        ct =  require('./content-type.js'),
        ext = path.extname( req );


    if( !ext ) { req = rewrite( req ); }

    if(req !== false) {
        req = req.charAt(0) == '/' ? req.slice(1) : req;
    }

    if( fs.existsSync( req ) ) {

        status = 200;
        content_type = ct( req );
        content = fs.readFileSync( req );

    } else {

        status = 404;
        content_type = '';
        content = '';

    }

    return {
        'status': status,
        'content_type': content_type,
        'content': content
    }


}