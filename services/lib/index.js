'use strict';

// add wkhtmltopdf to the execute path
process.env['PATH'] = [process.env['PATH'], __dirname + '/../bin', process.env['LAMBDA_TASK_ROOT'] + '/bin'].join(':');

const wkhtmltopdf = require('wkhtmltopdf');
const read = require('read-all-stream');

module.exports.process = function (event) {
console.log(event);
  return read(wkhtmltopdf(event.html), null);

};