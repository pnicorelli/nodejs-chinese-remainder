/**
* Base on http://rosettacode.org/wiki/Chinese_remainder_theorem (python implementation)
* solve a system of linear congruences by applying the Chinese Remainder Theorem
*
* 	X = a1  (mod n1)
*  	X = a2  (mod n2)
*
* This function will be called as:
*
* chineseRemainder( [a1, a2], [n1, n2])
* @return {bignum}
*/
var bignum = require('bignum');

function mul_inv(a, b){

  var b0 = b;
  var x0 = bignum(0);
  var x1 = bignum(1);
  var q, tmp;
  if( b.eq(1) ){
    return b;
  }
  while( a.gt(1) ){
    q = a.div(b);
    tmp = a;
    a = b;
    b = tmp.mod(b);
    tmp = x0;
    //x0 = x1 - (q * x0);
    x0 = x1.sub( q.mul(x0) );
    x1 = tmp;
  }
  if( x1.lt(0) ){
    x1 = x1.add(b0);
  }
  return x1;
}

// a, n are array of bignum instances
function chineseRemainder_bignum(a, n){
  var p = bignum(1);
  var p1 = bignum(1);
  var prod = bignum(1);
  var i = 1;
  var sm = bignum(0);
  for(i=0; i< n.length; i++){
    prod = prod.mul( n[i] );
    //prod = prod * n[i];
  }
  for(i=0; i< n.length; i++){
    p = prod.div( n[i] );

    //sm = sm + ( a[i] * mul_inv(p, n[i]) * p);
    p1 = mul_inv( p, n[i] );
    p1 = p1.mul( a[i] );
    p1 = p1.mul( p );
    sm = sm.add( p1 );
  }
  return sm.mod(prod);
}


module.exports = chineseRemainder_bignum;
