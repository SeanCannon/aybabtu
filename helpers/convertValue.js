'use strict';

const parseValue    = require('./parseValue'),
      divideDigits  = require('./divideDigits'),
      intToDigit    = require('./intToDigit');

module.exports = (value, from, to) => {
  const { sign, digits, valid } = parseValue(value, from);

  if (!valid) return 'NaN';

  let acc     = [],
      current = digits;

  while (current.length) {
    const { quotient, remainder } = divideDigits(current, from, to);
    acc.push(remainder);
    current = quotient;
  }

  const result = acc.reverse().map(intToDigit).join('');
  return sign < 0 ? '-' + result : result;
};