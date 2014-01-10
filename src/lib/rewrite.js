// rewrite.js

module.exports = function( url ) {

    var fs = require('fs'),
        page = false;

    if( !fs.existsSync('rewrite.json') ) {

        console.log('ERROR: file not exists => rewrite.json'.red );

        console.log('{'.red );
        console.log('    "pages": {'.red );
        console.log('        "/": "index.html"'.red );
        console.log('    }'.red );
        console.log('}'.red );

        process.exit(1); // Exit

    }

    var json = JSON.parse( fs.readFileSync('rewrite.json') );

    Object.keys( json.pages ).forEach(function( key ) {

        if( key == url ) {
            page = json.pages[key];

        }

    });

    return page;

};