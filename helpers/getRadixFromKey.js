'use strict';

const {
        BASE_MAP,
        BASE_MAP_INDEX_RADIX
      } = require('../constants');

const find = require('./find'),
      head = require('./head');

module.exports = key => head(find(BASE_MAP)(key))[BASE_MAP_INDEX_RADIX];
