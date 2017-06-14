'use strict';

const Sequelize = require( 'sequelize' );
const Promise   = require( 'bluebird' );
const debug     = require( 'debug' )( 'init-logger' );
const config    = require( './config' );

exports.init = function(){

    return new Promise( function( resolve ) {

        let sequelize = new Sequelize(
            config.mysql.database,
            config.mysql.user,
            config.mysql.password, {
                'host'    : config.mysql.host,
                'dialect' : 'mysql',
                'logging' : false
            }
        );

        sequelize
            .authenticate()
            .then(() => {

                debug( 'authenticate mysql' );
                debug( 'attached models' );

                require( './models' )( sequelize );
                resolve( sequelize );
            })
            .catch((error) =>{
                debug( error );
            });
    });
};
