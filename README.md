# aybabtu
**All Your Base Are Belong To Us**

*A simple and convenient API for converting data between decimal, hexadecimal, and binary.*

[![Build Status](https://travis-ci.org/SeanCannon/aybabtu.svg?branch=master)](https://travis-ci.org/SeanCannon/aybabtu) [![npm version](http://img.shields.io/npm/v/aybabtu.svg)](https://npmjs.org/package/aybabtu) [![Dependency Status](https://david-dm.org/SeanCannon/aybabtu.svg)](https://david-dm.org/SeanCannon/aybabtu)


## Install

```
$ npm install aybabtu --save
```

Run the specs

```
$ npm test
```

## Usage

```js
const base = require('aybabtu');

base.dec2hex('42');  // '2a'
```

## Decimal : Base 10

### Convert to Hexidecimal
String → String
```js
expect(base.dec2hex('42')).toBe('2a');
```

---
### Convert to Binary
String → String
```js
expect(base.dec2bin('42')).toBe('101010');
```


## Hexadecimal : Base 16

### Convert to Decimal
String → String
```js
expect(base.hex2dec('2a')).toBe('42');
```

---
### Convert to Binary
String → String
```js
expect(base.hex2bin('2a')).toBe('101010');
```


## Binary : Base 2

### Convert to Decimal
String → String
```js
expect(base.bin2dec('101010')).toBe('42');
```

---
### Convert to Hexadecimal
String → String
```js
expect(base.bin2hex('101010')).toBe('2a');
```
