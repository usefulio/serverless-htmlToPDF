'use strict';

let lib = require('../lib');

module.exports.handler = function(event, context, cb) {
  return lib.process(event)
    .then(function(result){
      // result is a buffer
      cb(null, result);
    }).catch(function(err){
      cb(err);
    });
};
