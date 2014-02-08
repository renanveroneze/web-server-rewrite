// => rewrite.js

module.exports = function( request, base ) {



    //
    // Module Dependencies
    //

    var fs = require('fs');



    //
    // Checks if the file exists JSON
    //

    if( !fs.existsSync( base + 'rewrite.json' ) ) {
        console.log('\x1B[31mERROR: file not exists => rewrite.json\x1B[0m');
        return request.slice(1);
    }



    //
    // Load JSON and Process URL
    //

    var json = JSON.parse(fs.readFileSync( base + 'rewrite.json' ));

    for( rule in json.pages ) {

        rule_p = rule.replace(/:id/g, '([\d]+)')
        rule_p = rule_p.replace(/(:name|:module|:page|:action)/g, '([\w]+)')


        var reg_exp = new RegExp( '^' + rule_p + '$' );


        if( reg_exp.test( request ) || rule == request ) {

            return request.replace( reg_exp,  json.pages[ rule ]);

        }

    }

    return request.slice(1);

};