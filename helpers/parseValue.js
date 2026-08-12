'use strict';

const digitToInt = require('./digitToInt');

module.exports = (value, radix) => {
  let rest = String(value).trim();

  let sign = 1;
  if (rest[0] === '-') {
    sign = -1;
    rest = rest.slice(1);
  } else if (rest[0] === '+') {
    rest = rest.slice(1);
  }

  if (radix === 16 && /^0x/i.test(rest)) rest = rest.slice(2);

  const digits = [];
  for (let i = 0; i < rest.length; i++) {
    const int = digitToInt(rest[i]);
    if (int < radix) digits.push(int);
    else break;
  }

  return { sign, digits, valid: digits.length > 0 };
};