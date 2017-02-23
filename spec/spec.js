'use strict';

const R = require('ramda');

const aybabtu    = require('../index'),
      COMPARATOR = require('../constants').COMPARATOR;

const makePattern = R.compose(
  R.constructN(1, RegExp),
  R.join('|'),
  R.map(R.concat('^')),
  R.split('2')
);

const makeAssertion = functionName => {
  const pattern = makePattern(functionName);

  const _from = R.head,
        _to   = R.last,
        _base = R.view(R.lensIndex(0)),
        _comp = R.view(R.lensIndex(1));

  const bases = R.compose(
    R.ifElse(
      R.compose(
        R.equals(R.take(3, functionName)),
        R.take(3),
        R.head,
        R.head
      ),
      R.identity,
      R.reverse
    ),
    R.filter(R.compose(R.test(pattern), R.head)),
    R.toPairs
  )(COMPARATOR);

  const fromBase = R.compose(_base, _from)(bases),
        toBase   = R.compose(_base, _to)(bases),
        fromComp = R.compose(_comp, _from)(bases),
        toComp   = R.compose(_comp, _to)(bases);

  it(fromBase + ' are belong to ' + toBase, () => {
    expect(aybabtu[functionName](fromComp)).toBe(toComp);
  });

  return bases;
};

describe('all your', () => {

  R.compose(
    R.map(makeAssertion),
    R.keys,
    R.omit(['allYour'])
  )(aybabtu);

});
