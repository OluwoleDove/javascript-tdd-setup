'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that argument is a positive integer", function() {
  it("should give Invalid input if N is negative", function() {
    assert(
      lib.sumOfPrimes(-20) == "Invalid input")
    );
  });
  it("Test that argument is a number", function() {
    assert(
      lib.sumOfPrimes("a") == "Argument not a number"
    );
  });
  it("should test that number is not float", function() {
    assert(
      lib.sumOfPrimes(5.82) == "Number not an integer"
    );
  });
  it("should return invalid parameters for arguments more than one", function() {
    assert(
      lib.sumOfPrimes(5, 4) == "Invalid parameters"
    );
  });
  it("should give 10, if number is 5", function() {
    assert(
      lib.sumOfPrimes(5) == 10
    );
  });
  it("should give 10, if number is 5", function() {
    assert(
      lib.sumOfPrimes(15) == 31
    );
  });
  it("should give 10, if number is 5", function() {
    assert(
      lib.sumOfPrimes(20) == 77
    );
  });
  it("should give 10, if number is 5", function() {
    assert(
      lib.sumOfPrimes(25) == 100
    );
  });
  it("should give 10, if number is 5", function() {
    assert(
      lib.sumOfPrimes(39) == 197
    );
  });
  it("should give 10, if number is 5", function() {
    assert(
      lib.sumOfPrimes(51) == 328
    );
  });
});