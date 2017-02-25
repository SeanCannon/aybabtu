'use strict';

const BASE_MAP = [
  ['bin', 'binary',      2,  '110010'],
  ['ter', 'ternary',     3,  '1212'],
  ['qua', 'quaternary',  4,  '302'],
  ['qui', 'quinary',     5,  '200'],
  ['sen', 'senary',      6,  '122'],
  ['sep', 'septenary',   7,  '101'],
  ['oct', 'octal',       8,  '62'],
  ['non', 'nonary',      9,  '55'],
  ['dec', 'decimal',     10, '50'],
  ['und', 'undenary',    11, '46'],
  ['duo', 'duodecimal',  12, '42'],
  ['hex', 'hexidecimal', 16, '32'],
  ['vig', 'vigesimal',   20, '2a']
];

module.exports = {
  BASE_MAP,
  BASE_MAP_INDEX_KEY        : 0,
  BASE_MAP_INDEX_NAME       : 1,
  BASE_MAP_INDEX_RADIX      : 2,
  BASE_MAP_INDEX_COMPARATOR : 3
};
