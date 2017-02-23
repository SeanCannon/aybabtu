'use strict';

const R = require('ramda');

const aybabtu   = require('./index'),
      constants = require('./constants');

const uppercase = s => s.charAt(0).toUpperCase() + s.slice(1);

const makePattern = R.compose(
  R.constructN(1, RegExp),
  R.join('|'),
  R.map(R.concat('^')),
  R.split('2')
);

let currentBase = '';

console.log('## Supported Bases')

R.compose(
  R.map(base => console.log(' - [' + base + '](#' + base + ')')),
  R.map(uppercase),
  R.keys
)(constants.BASE);

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
  )(constants.COMPARATOR);

  const fromBase = R.compose(_base, _from)(bases),
        toBase   = R.compose(_base, _to)(bases),
        fromComp = R.compose(_comp, _from)(bases),
        toComp   = R.compose(_comp, _to)(bases);

  if (currentBase != fromBase) {
    currentBase = fromBase;

    console.log('## <a name="' + uppercase(fromBase) + '">' + uppercase(fromBase) + '</a>: Base ' + constants.BASE[fromBase]);
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

