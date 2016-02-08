var crt = require('./chinese_remainder.js');
var crt_bignum = require('./chinese_remainder_bignum.js');
var bignum = require('bignum');


// Simple Example
console.log( 'Suppose we have a system of congruences: ' );
console.log( '   x = 5 mod4' );
console.log( '   x = 3 mod5' );
console.log( '   x = 7 mod11' );
console.log( '  The solution is: ' + crt([5,3,7], [4,5,11]));


// Example using bignum lib
var a1=bignum('507483274265132509471575639764027');
var m1=bignum('269916455047188404153874847098609926219');
var a2=bignum('27723967616827289286920296659419136');
var m2=bignum('170141183460469231731687303715884105728');

var expected = bignum('26140225850797799686267310622940276042186008390341917470797088078891078123520');
console.log( 'Suppose we have a system of congruences: ' );
console.log( '   x = 507483274265132509471575639764027 mod 269916455047188404153874847098609926219' );
console.log( '   x = 27723967616827289286920296659419136 mod 170141183460469231731687303715884105728' );

var result = crt_bignum([a1, a2],[m1, m2]);

console.log( '  The solution is: ' + result.toString() );
