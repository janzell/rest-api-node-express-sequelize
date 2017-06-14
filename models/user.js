'use strict';

const Sequelize = require( 'sequelize' );
const debug     = require( 'debug' );

module.exports = function( sqlize ){
    debug( 'sqlize ');
    return sqlize.define( 'user', {
        'user_id'  : {
            'type'       : Sequelize.UUID,
            'primaryKey' : true
        },
        'first_name' : Sequelize.STRING,
        'last_name' : Sequelize.STRING,
        'phone_number' : Sequelize.STRING,
        'email' : Sequelize.STRING
    },{
        'timestamps'      : false,
        'freezeTableName' : true,
        'tableName'       : 'user',
        'paranoid'        : true
    });
}
