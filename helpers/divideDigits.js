'use strict';

module.exports = (digits, from, to) => {
  let remainder = 0;

  const quotient = digits.map(digit => {
    const cur = remainder * from + digit;
    remainder = cur % to;
    return Math.floor(cur / to);
  });

  while (quotient.length && !quotient[0]) quotient.shift();

  return { quotient, remainder };
};