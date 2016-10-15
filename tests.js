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
  it("it should give an error for a string input", function() {
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
  it("should give invalid argument for an array input", function() {
    assert(
      lib.sumOfPrimes([1,2,3,4,5,6]) == "Invalid argument"
    );
  });
  it("should give 31, if number is 15", function() {
    assert(
      lib.sumOfPrimes(15) == 31
    );
  });
  it("should give 77, if number is 20", function() {
    assert(
      lib.sumOfPrimes(20) == 77
    );
  });
  it("should give 100, if number is 25", function() {
    assert(
      lib.sumOfPrimes(25) == 100
    );
  });
  it("should give 197, if number is 39", function() {
    assert(
      lib.sumOfPrimes(39) == 197
    );
  });
  it("should give 328, if number is 51", function() {
    assert(
      lib.sumOfPrimes(51) == 328
    );
  });
});