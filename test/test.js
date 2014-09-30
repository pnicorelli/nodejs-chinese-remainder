var should = require('chai').should()
  , expect = require('chai').expect
  , chinese = require('../chinese_remainder.js');

describe('try some know result for test', function(){

  it('2 congruences test', function() {
    var a1=3;
    var m1=2;
    var a2=4;
    var m2=5;
    expect( chinese([a1, a2],[m1, m2]) ).to.be.equal(9);
    var a1=2;
    var m1=4;
    var a2=4;
    var m2=5;
    expect( chinese([a1, a2],[m1, m2]) ).to.be.equal(14);
    var a1=2000;
    var m1=2;
    var a2=300;
    var m2=33;
    expect( chinese([a1, a2],[m1, m2]) ).to.be.equal(36);
  });

  it('3 congruences test', function() {
    var a1=2;
    var m1=13;
    var a2=12;
    var m2=3;
    var a3=22;
    var m3=2;
    expect( chinese([a1, a2, a3],[m1, m2, m3]) ).to.be.equal(54);
    var a1=44;
    var m1=2;
    var a2=12;
    var m2=5;
    var a3=10;
    var m3=3;
    expect( chinese([a1, a2, a3],[m1, m2, m3]) ).to.be.equal(22);

  });

});
