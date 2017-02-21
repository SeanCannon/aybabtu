'use strict';

const R = require('ramda');

const aybabtu = require('./index');

const __bases = {
  binary      : 2,
  ternary     : 3,
  quaternary  : 4,
  quinary     : 5,
  senary      : 6,
  septenary   : 7,
  octal       : 8,
  nonary      : 9,
  decimal     : 10,
  undenary    : 11,
  duodecimal  : 12,
  hexadecimal : 16,
  vigesimal   : 20
};

const COMPARATOR = {
  binary      : '110010',
  ternary     : '1212',
  quaternary  : '302',
  quinary     : '200',
  senary      : '122',
  septenary   : '101',
  octal       : '62',
  nonary      : '55',
  decimal     : '50',
  undenary    : '46',
  duodecimal  : '42',
  hexadecimal : '32',
  vigesimal   : '2a'
};

const makePattern = R.compose(
  R.constructN(1, RegExp),
  R.join('|'),
  R.map(R.concat('^')),
  R.split('2')
);

let currentBase = '';

const generateMd = functionName => {
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

  if (currentBase != fromBase) {
    currentBase = fromBase;

    console.log('## ' + fromBase.charAt(0).toUpperCase() + fromBase.slice(1) + ': Base ' + __bases[fromBase]);
    console.log('');
  }
  console.log('### Convert to ' + toBase.charAt(0).toUpperCase() + toBase.slice(1));
  console.log('String → String');
  console.log('```js');
  console.log('expect(' + functionName + '(\'' + fromComp + '\')).toBe(\'' + toComp + '\');');
  console.log('```');

  return bases;
};

module.exports = R.compose(
  R.map(generateMd),
  R.keys,
  R.omit(['allYour'])
)(aybabtu);

