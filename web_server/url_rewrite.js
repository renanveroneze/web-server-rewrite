
module.exports = function( url ) {

    var path = require('path'),
        fs = require('fs'),
        reference = path.basename( url ),
        rewrite = JSON.parse( fs.readFileSync('../url_rewrite.json') ),
        page = false;

    Object.keys(rewrite.pages).forEach(function(key) {

        if(key == reference) {
            page = rewrite.pages[key];
        }

    });

    return page;


};