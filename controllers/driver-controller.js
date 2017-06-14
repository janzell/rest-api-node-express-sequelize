'use strict';

const debug  = require( 'debug' )( 'controllers ');

module.exports = function( sequelize ){
    return {
        'getDrivers' : function( req, res ){
            sequelize.MODELS.Driver.findAll().then( driver => {
                res.send( driver );
            });
        },
        'createDriver' : function(){
            sequelize.MODELS.Driver.findAll().then( driver => {
                res.send( driver );
            });
        },
        'getDriver' : function( req, res ){
            sequelize.MODELS.Driver.findById( req. params.userId )
            .then( driver => {
                res.send( driver );
            });
        }
    }
}
