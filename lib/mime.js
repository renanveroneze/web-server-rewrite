// mime.js

module.exports = function( file ) {

    var type = file.split('.').pop(),
        types = {
            'js': 'application/javascript',
            'css': 'text/css',
            'html': 'text/html',
            'jpg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'ico': 'image/x-icon',
            'json': 'application/json',
            'svg': 'image/svg+xml',
            'ttf': 'application/x-font-truetype',
            'otf': 'application/x-font-opentype',
            'woff': 'application/font-woff',
            'eot': 'application/vnd.ms-fontobject',
            'php': 'text/html'
        };

    return { 'Content-Type': types[ type ] };

};