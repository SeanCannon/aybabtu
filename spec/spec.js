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

describe('beyond the 32-bit limitation', () => {
  const tooLargeBinary = '11111011000001010011100101111001010001110011100011011010';

  const cases = {
    bin : tooLargeBinary,
    ter : '110201011122000011000201002211221022',
    qua : '3323001103211321101303203122',
    qui : '1043042004301332423011104',
    sen : '3115412405320453042442',
    sep : '61250402624050450604',
    oct : '3730123457121634332',
    non : '421148004021084838',
    dec : '70655963560360154',
    und : '15a07192962720139',
    duo : '4704653118926422',
    hex : 'fb0539794738da',
    vig : 'h4jjibacc507e'
  };

  Object.keys(cases).filter(to => to !== 'bin').forEach(to => {
    it(`converts oversized binary to ${to} without losing precision`, () => {
      expect(aybabtu['bin2' + to](tooLargeBinary)).toBe(cases[to]);
    });

    it(`converts oversized ${to} back to binary without losing precision`, () => {
      expect(aybabtu[to + '2bin'](cases[to])).toBe(tooLargeBinary);
    });
  });

  it('converts an oversized value with the master converter', () => {
    expect(
      aybabtu.allYour('binary').areBelongTo('hexadecimal')(tooLargeBinary)
    ).toBe('fb0539794738da');
  });

  it('converts an oversized decimal value to binary', () => {
    expect(aybabtu.dec2bin('36028797018963970')).toBe('10000000000000000000000000000000000000000000000000000010');
  });

  it('accepts numeric input via the master converter', () => {
    expect(aybabtu.allYour('decimal').areBelongTo('binary')(36028797018963970)).toBe('10000000000000000000000000000000000000000000000000000010');
  });
});

describe('parity with parseInt', () => {
  it('converts uppercase hexadecimal digits', () => {
    expect(aybabtu.hex2bin('1A')).toBe('11010');
  });

  it('accepts a leading plus sign', () => {
    expect(aybabtu.dec2hex('+42')).toBe('2a');
  });

  it('accepts a leading negative sign', () => {
    expect(aybabtu.dec2hex('-42')).toBe('-2a');
  });

  it('stops at the first invalid digit', () => {
    expect(aybabtu.dec2hex('42px')).toBe('2a');
  });

  it('converts an 0x-prefixed hexadecimal value', () => {
    expect(aybabtu.hex2bin('0x10')).toBe('10000');
    expect(aybabtu.hex2bin('-0x10')).toBe('-10000');
  });

  it('treats a value with no valid digits as NaN', () => {
    expect(aybabtu.dec2hex('foo')).toBe('NaN');
  });

  it('stops parsing at a non-digit between digits', () => {
    expect(aybabtu.dec2hex('1.5')).toBe('1');
  });

  it('converts zero', () => {
    expect(aybabtu.dec2hex('0')).toBe('0');
  });

  it('accepts numeric input for quick methods', () => {
    expect(aybabtu.dec2hex(42)).toBe('2a');
  });
});

describe('esm named imports', () => {
  it('exposes named quick methods, the master converter, and a default', done => {
    import('../index.mjs').then(esm => {
      expect(esm.dec2bin('50')).toBe('110010');
      expect(esm.hex2vig('32')).toBe('2a');
      expect(esm.allYour('decimal').areBelongTo('binary')(50)).toBe('110010');
      expect(esm.bin2hex('11111011000001010011100101111001010001110011100011011010')).toBe('fb0539794738da');
      expect(esm.default.dec2bin('50')).toBe('110010');
      done();
    });
  });

  it('resolves the same named exports when importing by package name', done => {
    import('aybabtu').then(esm => {
      expect(esm.dec2bin('50')).toBe('110010');
      expect(esm.allYour('binary').areBelongTo('hexadecimal')('11111011000001010011100101111001010001110011100011011010')).toBe('fb0539794738da');
      done();
    });
  });
});
