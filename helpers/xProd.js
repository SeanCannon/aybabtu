'use strict';

const head             = require('./head'),
      ensureUniquePair = require('./ensureUniquePair');

module.exports = (xs, ys) => {
  let a = [];
  xs.map(x => ys.map(y => a.push(ensureUniquePair(x)(y))));
  return a.filter(head);
};
