// => rewrite.js

module.exports = function( request, base ) {

    var fs = require('fs');

    if( !fs.existsSync( base + 'rewrite.json' ) ) {
        console.log('\x1B[31mERROR: file not exists => rewrite.json\x1B[0m');
        return false;
    }

    var json = JSON.parse(fs.readFileSync( base + 'rewrite.json' ));

    for( rule in json.pages ) {

        var reg_exp = new RegExp( rule );

        if( reg_exp.test( request ) || rule == request ) {
            return json.pages[ rule ];
        }

    }

};