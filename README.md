# aybabtu
**All Your Base Are Belong To Us**

*A simple and convenient API for converting data between mathematical bases.*

[![Build Status](https://travis-ci.org/SeanCannon/aybabtu.svg?branch=master)](https://travis-ci.org/SeanCannon/aybabtu) [![npm version](http://img.shields.io/npm/v/aybabtu.svg)](https://npmjs.org/package/aybabtu) [![Dependency Status](https://david-dm.org/SeanCannon/aybabtu.svg)](https://david-dm.org/SeanCannon/aybabtu) [![Coverage Status](https://coveralls.io/repos/github/SeanCannon/aybabtu/badge.svg?branch=master)](https://coveralls.io/github/SeanCannon/aybabtu?branch=master)


## Disclaimer
Use of this library is quite silly since all it is really doing is this:

```
parseInt(myValue, baseFrom).toString(baseTo)
```

Why use aybabtu then? 
 - Your app could always use another dependency
 - 31,200% unit test coverage (pay no attention to the coveralls badge)
 - Magic constants like `16` (base hex) and `10` (base dec) can confuse junior devs
 - Because `parseInt` and `toString` should never be seen together so we hide them for you
 - Somebody set up us the bomb.

## Limitations
 
##### 32-bit limitation
JavaScript caps bitwise operator support at 32 bits, so giving `aybabtu` a value larger than that [won't work](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators).

A simple workaround is to break up your value into 32 bit chunks, for example: 

```js
const tooLargeBinary = '11111011000001010011100101111001010001110011100011011010';
const wrongValue     = base.bin2hex(tooLargeBinary); // "fb0539794738d8"
const rightValue     = tooLargeBinary.match(/.{1,32}/g).map(base.bin2hex).join(''); // "fb0539794738da"
```



## Install

```
$ npm install aybabtu --save
```

Run the specs

```
$ npm test
```

## Usage
##### Using quick methods
```js
const base = require('aybabtu');

base.dec2hex('42');  // '2a'
```
##### Using the master converter
```js
const { allYour } = require('aybabtu');

allYour('decimal').areBelongTo('binary')(50);  // '110010'
```

## Supported Bases
 - [Binary](#Binary)
 - [Ternary](#Ternary)
 - [Quaternary](#Quaternary)
 - [Quinary](#Quinary)
 - [Senary](#Senary)
 - [Septenary](#Septenary)
 - [Octal](#Octal)
 - [Nonary](#Nonary)
 - [Decimal](#Decimal)
 - [Undenary](#Undenary)
 - [Duodecimal](#Duodecimal)
 - [Hexadecimal](#Hexadecimal)
 - [Vigesimal](#Vigesimal)
  
## <a name="Binary">Binary</a>: Base 2

### Convert to Ternary
String → String
```js
expect(bin2ter('110010')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(bin2qua('110010')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(bin2qui('110010')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(bin2sen('110010')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(bin2sep('110010')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(bin2oct('110010')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(bin2non('110010')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(bin2dec('110010')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(bin2und('110010')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(bin2duo('110010')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(bin2hex('110010')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(bin2vig('110010')).toBe('2a');
```
## <a name="Ternary">Ternary</a>: Base 3

### Convert to Binary
String → String
```js
expect(ter2bin('1212')).toBe('110010');
```
### Convert to Quaternary
String → String
```js
expect(ter2qua('1212')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(ter2qui('1212')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(ter2sen('1212')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(ter2sep('1212')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(ter2oct('1212')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(ter2non('1212')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(ter2dec('1212')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(ter2und('1212')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(ter2duo('1212')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(ter2hex('1212')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(ter2vig('1212')).toBe('2a');
```
## <a name="Quaternary">Quaternary</a>: Base 4

### Convert to Binary
String → String
```js
expect(qua2bin('302')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(qua2ter('302')).toBe('1212');
```
### Convert to Quinary
String → String
```js
expect(qua2qui('302')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(qua2sen('302')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(qua2sep('302')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(qua2oct('302')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(qua2non('302')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(qua2dec('302')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(qua2und('302')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(qua2duo('302')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(qua2hex('302')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(qua2vig('302')).toBe('2a');
```
## <a name="Quinary">Quinary</a>: Base 5

### Convert to Binary
String → String
```js
expect(qui2bin('200')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(qui2ter('200')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(qui2qua('200')).toBe('302');
```
### Convert to Senary
String → String
```js
expect(qui2sen('200')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(qui2sep('200')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(qui2oct('200')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(qui2non('200')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(qui2dec('200')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(qui2und('200')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(qui2duo('200')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(qui2hex('200')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(qui2vig('200')).toBe('2a');
```
## <a name="Senary">Senary</a>: Base 6

### Convert to Binary
String → String
```js
expect(sen2bin('122')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(sen2ter('122')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(sen2qua('122')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(sen2qui('122')).toBe('200');
```
### Convert to Septenary
String → String
```js
expect(sen2sep('122')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(sen2oct('122')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(sen2non('122')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(sen2dec('122')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(sen2und('122')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(sen2duo('122')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(sen2hex('122')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(sen2vig('122')).toBe('2a');
```
## <a name="Septenary">Septenary</a>: Base 7

### Convert to Binary
String → String
```js
expect(sep2bin('101')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(sep2ter('101')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(sep2qua('101')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(sep2qui('101')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(sep2sen('101')).toBe('122');
```
### Convert to Octal
String → String
```js
expect(sep2oct('101')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(sep2non('101')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(sep2dec('101')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(sep2und('101')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(sep2duo('101')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(sep2hex('101')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(sep2vig('101')).toBe('2a');
```
## <a name="Octal">Octal</a>: Base 8

### Convert to Binary
String → String
```js
expect(oct2bin('62')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(oct2ter('62')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(oct2qua('62')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(oct2qui('62')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(oct2sen('62')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(oct2sep('62')).toBe('101');
```
### Convert to Nonary
String → String
```js
expect(oct2non('62')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(oct2dec('62')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(oct2und('62')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(oct2duo('62')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(oct2hex('62')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(oct2vig('62')).toBe('2a');
```
## <a name="Nonary">Nonary</a>: Base 9

### Convert to Binary
String → String
```js
expect(non2bin('55')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(non2ter('55')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(non2qua('55')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(non2qui('55')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(non2sen('55')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(non2sep('55')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(non2oct('55')).toBe('62');
```
### Convert to Decimal
String → String
```js
expect(non2dec('55')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(non2und('55')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(non2duo('55')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(non2hex('55')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(non2vig('55')).toBe('2a');
```
## <a name="Decimal">Decimal</a>: Base 10

### Convert to Binary
String → String
```js
expect(dec2bin('50')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(dec2ter('50')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(dec2qua('50')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(dec2qui('50')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(dec2sen('50')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(dec2sep('50')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(dec2oct('50')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(dec2non('50')).toBe('55');
```
### Convert to Undenary
String → String
```js
expect(dec2und('50')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(dec2duo('50')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(dec2hex('50')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(dec2vig('50')).toBe('2a');
```
## <a name="Undenary">Undenary</a>: Base 11

### Convert to Binary
String → String
```js
expect(und2bin('46')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(und2ter('46')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(und2qua('46')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(und2qui('46')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(und2sen('46')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(und2sep('46')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(und2oct('46')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(und2non('46')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(und2dec('46')).toBe('50');
```
### Convert to Duodecimal
String → String
```js
expect(und2duo('46')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(und2hex('46')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(und2vig('46')).toBe('2a');
```
## <a name="Duodecimal">Duodecimal</a>: Base 12

### Convert to Binary
String → String
```js
expect(duo2bin('42')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(duo2ter('42')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(duo2qua('42')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(duo2qui('42')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(duo2sen('42')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(duo2sep('42')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(duo2oct('42')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(duo2non('42')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(duo2dec('42')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(duo2und('42')).toBe('46');
```
### Convert to Hexadecimal
String → String
```js
expect(duo2hex('42')).toBe('32');
```
### Convert to Vigesimal
String → String
```js
expect(duo2vig('42')).toBe('2a');
```
## <a name="Hexadecimal">Hexadecimal</a>: Base 16

### Convert to Binary
String → String
```js
expect(hex2bin('32')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(hex2ter('32')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(hex2qua('32')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(hex2qui('32')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(hex2sen('32')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(hex2sep('32')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(hex2oct('32')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(hex2non('32')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(hex2dec('32')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(hex2und('32')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(hex2duo('32')).toBe('42');
```
### Convert to Vigesimal
String → String
```js
expect(hex2vig('32')).toBe('2a');
```
## <a name="Vigesimal">Vigesimal</a>: Base 20

### Convert to Binary
String → String
```js
expect(vig2bin('2a')).toBe('110010');
```
### Convert to Ternary
String → String
```js
expect(vig2ter('2a')).toBe('1212');
```
### Convert to Quaternary
String → String
```js
expect(vig2qua('2a')).toBe('302');
```
### Convert to Quinary
String → String
```js
expect(vig2qui('2a')).toBe('200');
```
### Convert to Senary
String → String
```js
expect(vig2sen('2a')).toBe('122');
```
### Convert to Septenary
String → String
```js
expect(vig2sep('2a')).toBe('101');
```
### Convert to Octal
String → String
```js
expect(vig2oct('2a')).toBe('62');
```
### Convert to Nonary
String → String
```js
expect(vig2non('2a')).toBe('55');
```
### Convert to Decimal
String → String
```js
expect(vig2dec('2a')).toBe('50');
```
### Convert to Undenary
String → String
```js
expect(vig2und('2a')).toBe('46');
```
### Convert to Duodecimal
String → String
```js
expect(vig2duo('2a')).toBe('42');
```
### Convert to Hexadecimal
String → String
```js
expect(vig2hex('2a')).toBe('32');
```

