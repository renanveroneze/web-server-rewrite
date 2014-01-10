
module.exports = function( path_name ) {

    var path = require('path'),
        type = path.extname(path_name).split('.')[1],

        types = {
            'js': 'application/javascript',
            'css': 'text/css',
            'html': 'text/html',
            'jpg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'ico': 'image/x-icon',
            'json': 'application/json'
        };

    if( types[type] === undefined ) { return false; }

    return { 'Content-Type': types[ type ] };

};