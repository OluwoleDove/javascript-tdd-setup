'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that argument is a positive integer", function() {
  it("should give Invalid input if N is negative", function() {
    assert(
      lib.sumOfPrimes(-33) == "Invalid argument")
    
  });
  it("it should give an error for a string input", function() {
    assert(
      lib.sumOfPrimes("a") == "Number is not an integer"
    );
  });
  it("should test that number is not float", function() {
    assert(
      lib.sumOfPrimes(7.93) == "Number is not an integer"
    );
  });
  it("should give invalid argument for an array input", function() {
    assert(
      lib.sumOfPrimes([1,2,3,4,5,9]) == "Number is not an integer"
    );
  });
  it("should give 10, if number is %", function() {
    assert(
      lib.sumOfPrimes(5) == "10"
    );
  });
  it("should give 31, if number is 15", function() {
    assert(
      lib.sumOfPrimes(15) == 41
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