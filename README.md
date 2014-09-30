NodeJS Chinese Remainder Theorem solver
=======================================

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



**References**

- http://en.wikipedia.org/wiki/Chinese_remainder_theorem
- http://rosettacode.org/wiki/Chinese_remainder_theorem
