// mime.js

module.exports = function( file ) {

    var type = file.split('.')[1],
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

    return { 'Content-Type': types[ type ] };

};