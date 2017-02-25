'use strict';

const head = require('./head');

module.exports = arr => key => arr.filter(a => head(a) === key);
