'use strict';

const debug  = require( 'debug' )( 'controllers ');

module.exports = function( sequelize ){
    return {
        'getUsers' : function( req, res ){
            sequelize.MODELS.User.findAll().then( user => {
                res.send( user );
            });
        },
        'createUser' : function(req, res){
            sequelize.MODELS.User.findAll().then( user => {
                res.send( user );
            });
        },
        'getUser' : function( req, res ){
            sequelize.MODELS.User.findById( req. params.userId )
            .then( user => {
                res.send( user );
            });
        }
    }
}
