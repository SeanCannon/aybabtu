'use strict';

const getRadixFromKey = require('./getRadixFromKey'),
      head            = require('./head'),
      last            = require('./last'),
      convertValue    = require('./convertValue');

module.exports = pair => {
  const baseFrom = getRadixFromKey(head(pair)),
        baseTo   = getRadixFromKey(last(pair)),
        method   = head(pair) + '2' + last(pair);

  return {
    [method] : (s) => convertValue(s, baseFrom, baseTo)
  };
};