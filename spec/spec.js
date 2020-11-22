'use strict';

const aybabtu = require('../index');

const head = require('../helpers/head'),
      last = require('../helpers/last'),
      find = require('../helpers/find');

const {
        BASE_MAP,
        BASE_MAP_INDEX_NAME       : METHOD,
        BASE_MAP_INDEX_COMPARATOR : COMPARATOR
      } = require('../constants');

const isQuickMethod = s => s !== 'allYour';

const makeAssertion = method => {
  const pair = method.split('2'),
        from = head(find(BASE_MAP)(head(pair))),
        to   = head(find(BASE_MAP)(last(pair)));

  it(`${from[METHOD]} are belong to ${to[METHOD]}`, () => {
    expect(aybabtu[method](from[COMPARATOR])).toBe(to[COMPARATOR]);
  });

  it(`api allows conversion from ${from[METHOD]} to ${to[METHOD]}`, () => {
    expect(aybabtu.allYour(from[METHOD]).areBelongTo(to[METHOD])(from[COMPARATOR])).toBe(to[COMPARATOR]);
  });

  return method;
};

describe('all your', () => {
  Object.keys(aybabtu).filter(isQuickMethod).forEach(makeAssertion);
});
