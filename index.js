'use strict';

const R = require('ramda');

const bases = require('./constants').BASE;

const isConversion = arr => arr[0] != arr[1];

const makeConversionFunction = R.curry((bases, arr) => {
  const keyFrom  = arr[0],
        keyTo    = arr[1],
        baseFrom = bases[keyFrom],
        baseTo   = bases[keyTo],
        fnName   = R.compose(
          R.join('2'),
          R.map(R.take(3))
        )(arr);

  return {
    [fnName] : (s) => parseInt(s, baseFrom).toString(baseTo)
  };
});

const conversionFunctions = R.compose(
  R.mergeAll,
  R.map(makeConversionFunction(bases)),
  R.filter(isConversion),
  R.apply(R.xprod),
  R.repeat(R.__, 2),
  R.keys
)(bases);

const allYour = R.curry((bases, base, s) => ({
  areBelongTo : us => parseInt(s, bases[base]).toString(bases[us])
}));

module.exports = R.mergeAll([
  { allYour : allYour(bases) },
  conversionFunctions
]);
