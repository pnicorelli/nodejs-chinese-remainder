var should = require('chai').should()
  , expect = require('chai').expect
  , chinese_bignum = require('../chinese_remainder_bignum.js')
  , bignum = require('bignum');

describe('try some know result for test (bignum version)', function(){

  it('2 congruences test', function() {
    var a1=bignum('507483274265132509471575639764027');
    var m1=bignum('269916455047188404153874847098609926219');
    var a2=bignum('27723967616827289286920296659419136');
    var m2=bignum('170141183460469231731687303715884105728');
    var result = chinese_bignum([a1, a2],[m1, m2]);
    var expected = bignum('26140225850797799686267310622940276042186008390341917470797088078891078123520');
    expect( result.toString() ).to.be.equal( expected.toString() );

  });


});
