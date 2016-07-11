var path = require('path'),
    _    = require('underscore'),
    join = path.join,
    re,
    ignorePath,
    data,
    fs   = require('fs');

function search(path) {
    try {
        var stat = fs.statSync( path );
        if( stat.isDirectory() ) {
            var files = fs.readdirSync( path );
            files.filter( filter ).map( function( file ) {
                return join( path, file );
            }).forEach( search );
        } else if( stat.isFile() ) {
            var str = fs.readFileSync( path, 'utf8' );
            str.split( '\n' ).forEach( function( line, i ) {
                if( !re.test( line ) ) return;
                //line = line.replace( re, '<b>$1</b>' );
                if( line.length > 100 ) {
                    line = line.substr( 0, 100 ); 
                }
                data[path] = data[path] || {};
                data[path].code = data[path].code || []; 
                data[path].path = path;
                data[path].code.push([i, line]);
            });
        }
    } catch( err ) { throw err };
}

module.exports = function(path, name, config){
    var result = [];
    data = {};
    config = config || {};    
    ignorePath = config.ignorePath || [];
    ignorePath.map(function(path){
        return trimStr(path);
    })
    re = new RegExp('(' + name + ')', 'ig')    
    search(path);   
    _.each(data, function(d){
        result.push(d);
    })
    return result;
}

function filter(path){
    if('.' == path[0]){
        return false;
    }

    for(var i=0; i< ignorePath.length; i++){
        if(path.toLowerCase() == ignorePath[i].toLowerCase()){
            return false;
        }
    }
    
    return true;  
}

function trimStr( str ) { return str.replace( /(^\s*)|(\s*$)/g, "" ); }