'use strict';

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

const BASE = {
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

module.exports = {
  COMPARATOR,
  BASE
};
