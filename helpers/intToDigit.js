'use strict';

module.exports = int => int < 10 ? String(int) : String.fromCharCode(int + 87);