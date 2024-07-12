let number = 13;
let bigInt = 1234567890123456789012345678901234567890n;
let string = 'Hello, World!';
let boolean = true;
let nullValue = null;
let value = undefined;
let object = {};
let sym = Symbol('foo');
let func = function () {};

alert(`number is ${typeof number}\n`+
    `bigInt is ${typeof bigInt}\n`+
    `string is ${typeof string}\n`+
    `boolean is ${typeof boolean}\n`+
    `nullValue is ${typeof nullValue}\n`+
    `value is ${typeof value}\n`+
    `object is ${typeof object}\n`+
    `sym is ${typeof sym}\n`+
    `func is ${typeof func}\n`);