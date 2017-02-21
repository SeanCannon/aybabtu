'use strict';

const base = require('../index');

describe('all your', () => {

  it('decimal are belong to hex', () => {
    expect(base.dec2hex('42')).toBe('2a');
  });

  it('decimal are belong to binary', () => {
    expect(base.dec2bin('42')).toBe('101010');
  });

  it('hexadecimal are belong to decimal', () => {
    expect(base.hex2dec('2a')).toBe('42');
  });

  it('hexadecimal are belong to binary', () => {
    expect(base.hex2bin('2a')).toBe('101010');
  });

  it('binary are belong to decimal', () => {
    expect(base.bin2dec('101010')).toBe('42');
  });

  it('binary are belong to hexadecimal', () => {
    expect(base.bin2hex('101010')).toBe('2a');
  });

});
