'use strict';

const BASE_BIN = 2,
      BASE_HEX = 16,
      BASE_DEC = 10;

const aybabtu = (s, baseFrom, baseTo) => parseInt(s, baseFrom).toString(baseTo);

module.exports = {
  bin2dec : s => aybabtu(s, BASE_BIN, BASE_DEC),
  bin2hex : s => aybabtu(s, BASE_BIN, BASE_HEX),
  dec2bin : s => aybabtu(s, BASE_DEC, BASE_BIN),
  dec2hex : s => aybabtu(s, BASE_DEC, BASE_HEX),
  hex2bin : s => aybabtu(s, BASE_HEX, BASE_BIN),
  hex2dec : s => aybabtu(s, BASE_HEX, BASE_DEC)
};
