// rewrite.js

module.exports = function( url, base ) {

    var fs = require('fs'),
        page = false;

    if( !fs.existsSync( base + 'rewrite.json') ) {

        console.log('ERROR: file not exists => rewrite.json'.red );

        console.log('{'.red );
        console.log('    "pages": {'.red );
        console.log('        "/": "index.html"'.red );
        console.log('    }'.red );
        console.log('}'.red );

        process.exit(1); // Exit

    }

    var json = JSON.parse( fs.readFileSync( base + 'rewrite.json') );

    Object.keys( json.pages ).forEach(function( key ) {

        if( key != '/') {

            var regexp = new RegExp( key )
            if( regexp.test( url ) ) {
                page = json.pages[key];
            }

        }

        if( key == url ) {
            page = json.pages[key];

        }

    });

    return page;

};