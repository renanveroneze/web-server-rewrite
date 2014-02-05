// => argv.js

exports.resolve = function() {

    var options = {},
        argvs = arguments[0];

    for( n in argvs ) {

        var argv = argvs[ n ];

        /* -------------------------- Rules -------------------------- */

        // => Network Port

        if( /^([0-9]{4}|[0-9]{2})$/.test( argv ) && argv ) { options.port = argv; continue; }


        // => Root Directory

        if( /([a-z\/]+)$/.test( argv ) && argv ) { options.base = process.cwd() + '/' + argv; continue; }

    }

    return options;

};

exports.flags = function( flags ) {

    var options = {};

    for( n in flags ) {

        var frag = flags[ n ].split('='),
            flag = frag[0].replace(/(--|-)/, ''),
            value = frag[1];

        /* -------------------------- Rules -------------------------- */

        if( flag == 'port' || flag == 'p' ) { options.port = value; } // => Network Port
        if( flag == 'base' || flag == 'b' ) { options.base = value; } // => Root Directory

    }

    return options;

}





