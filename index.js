'use strict';

const { BASE_MAP } = require('./constants');

const head                   = require('./helpers/head'),
      xProd                  = require('./helpers/xProd'),
      getRadixFromKey        = require('./helpers/getRadixFromKey'),
      makeConversionFunction = require('./helpers/makeConversionFunction');

const allYour = baseFrom => ({
  areBelongTo : baseTo => value => {
    return parseInt(
      value,
      getRadixFromKey(baseFrom.slice(0, 3))
    ).toString(
      getRadixFromKey(baseTo.slice(0, 3))
    );
  }
});


const baseKeys     = BASE_MAP.map(head),
      baseKeyPairs = xProd(baseKeys, baseKeys),
      quickMethods = baseKeyPairs.map(makeConversionFunction);

module.exports = Object.assign({}, { allYour }, ...quickMethods);
