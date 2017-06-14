'use strict';

const express    = require( 'express' );
const bodyParser = require( 'body-parser' );
const app        = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {'extended' : false } ));

//--------------------------------//
//              ROUTES            //
//--------------------------------//
var routes = require( './routes');
routes( app );

module.exports = app;
