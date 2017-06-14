'use strict';

const config = require( './config' );
const app    = require( './app' );
const port   = config.port || 8000;
const debug  = require( 'debug' )( 'taxi-app' );

const server = app.listen( port, (error) => {

    if ( error ){
        throw new Error( 'Didnt start' );
    }

    debug( `Server listening port ${port}` );
});
