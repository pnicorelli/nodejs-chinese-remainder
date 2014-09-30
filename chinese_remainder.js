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
* @return {integer}
*/

function mul_inv(a, b){

  var b0 = b;
  var x0 = 0;
  var x1 = 1;
  var q, tmp;
  if( b== 1){
    return 1;
  }
  while(a>1){
    q = parseInt(a/b);
    tmp = a;
    a = b;
    b = tmp%b;
    tmp = x0;
    x0 = x1 - (q * x0);
    x1 = tmp;
  }
  if(x1 <0){
    x1 = x1+b0;
  }
  return x1;
}

function chineseRemainder(a, n){
  var p = i = prod = 1;
  var sm = 0;
  for(i=0; i< n.length; i++){
    prod = prod * n[i];
  }
  for(i=0; i< n.length; i++){
    p = prod / n[i];
    sm = sm + ( a[i] * mul_inv(p, n[i]) * p);
  }
  return sm % prod;
}


module.exports = chineseRemainder;
