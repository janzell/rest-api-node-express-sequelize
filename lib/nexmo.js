'use strict';

var Nexmo = require('nexmo');

let options = {
  debug: true|false,
  appendToUserAgent: string,
  logger: {
    log: function() {},
    info: function() {},
    warn: function() {}
  }
};

var nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
  }, options
});


module.exports = nexmo;
