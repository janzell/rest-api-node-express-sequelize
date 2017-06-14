'use strict';

const env = process.env.NODE_ENV || 'test';
const dbConfigs = require('./database.json');

const configs  = {
    'test' : {
        'port'  : 8000,
        'mysql' : dbConfigs.dev
    },
}

module.exports = configs[env];
