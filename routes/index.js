'use strict';

const connect = require( './../db' ).init;

module.exports = function( app ) {

    connect().then( sequelize => {

        const User   = require( './../controllers/user-controller')( sequelize );
        const Driver = require( './../controllers/driver-controller')( sequelize );

        app.route( '/users' )
        .get( User.getUsers )
        .post( User.createUser );

        app.route( '/users/:userId' )
        .get( User.getUser );
        // .put( User.updateUser )
        // .delete( User.deleteUser );
    })
    .catch( () => {
        console.log('cant connect');
    });
};
