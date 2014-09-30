var crt = require('./chinese_remainder.js');
var crt_bigint = require('./chinese_remainder_bigint.js');
var bigint = require('bigint');


// Simple Example
console.log( 'Suppose we have a system of congruences: ' );
console.log( '   x = 5 mod4' );
console.log( '   x = 3 mod5' );
console.log( '   x = 7 mod11' );
console.log( '  The solution is: ' + crt([5,3,7], [4,5,11]));


// Example using bigint lib
var a1=bigint('507483274265132509471575639764027');
var m1=bigint('269916455047188404153874847098609926219');
var a2=bigint('27723967616827289286920296659419136');
var m2=bigint('170141183460469231731687303715884105728');

var expected = bigint('26140225850797799686267310622940276042186008390341917470797088078891078123520');
console.log( 'Suppose we have a system of congruences: ' );
console.log( '   x = 507483274265132509471575639764027 mod 269916455047188404153874847098609926219' );
console.log( '   x = 27723967616827289286920296659419136 mod 170141183460469231731687303715884105728' );

var result = crt_bigint([a1, a2],[m1, m2]);

console.log( '  The solution is: ' + result.toString() );
