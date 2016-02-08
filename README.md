NodeJS Chinese Remainder Theorem solver
=======================================

[![Build Status](https://travis-ci.org/pnicorelli/nodejs-chinese-remainder.svg?branch=master)](https://travis-ci.org/pnicorelli/nodejs-chinese-remainder)

If you come here you probably already know what the chinese remainder theorem is.
Here you can find a NodeJS implementation.


**USAGE**

You can fetch this library directly from npm:
```
npm install nodejs-chinese-remainder
```

and then use it on your code like:

```
var crt = require('nodejs-chinese-remainder');

console.log( 'Suppose we have a system of congruences: ' );
console.log( '   x = 5 mod4' );
console.log( '   x = 3 mod5' );
console.log( '   x = 7 mod11' );
console.log( '  The solution is: ' + crt([5,3,7], [4,5,11]));
```

if you are getting trouble because your integer numbers are too large you can use the power of libgmp.
I choose to use *bignum* libs from https://github.com/justmoon/node-bignum

Here an example:

```
var crt_bignum = require('nodejs-chinese-remainder');

var a1=bignum('507483274265132509471575639764027');
var m1=bignum('269916455047188404153874847098609926219');
var a2=bignum('27723967616827289286920296659419136');
var m2=bignum('170141183460469231731687303715884105728');
var result = crt_bignum([a1, a2],[m1, m2]);
console.log( result.toString() );
```

**References**

- http://en.wikipedia.org/wiki/Chinese_remainder_theorem
- http://rosettacode.org/wiki/Chinese_remainder_theorem
