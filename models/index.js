'use strict';

module.exports = function( sequelize ) {
    sequelize.MODELS             = {};
    sequelize.MODELS.User        = require('./user.js')( sequelize );
    // sequelize.MODELS.Driver      = require('./driver.js')( sequelize );
    // sequelize.MODELS.Dispatcher  = require('./dispatcher.js')( sequelize );
    // sequelize.MODELS.Payment     = require('./payment.js')( sequelize );
    // sequelize.MODELS.Trip        = require('./trip.js')( sequelize );
    // sequelize.MODELS.TripHistory = require('./trip-history.js')( sequelize );
};
