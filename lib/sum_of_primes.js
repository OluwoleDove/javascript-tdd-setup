// Sums the Primes munbers less than or equal to the supplied integer
'use strict'

module.exports = {
  sumOfPrimes: function sumOfPrimes(N) {
  var result = 0;

  function getPrimes(maxNum) {
    var sift = [];
    var x;
    var y;
    var primeArray = [];
    for (x = 2; x <= maxNum; ++x) {
      if (!sift[x]) {
        // x has not been marked -- it is prime
        primeArray.push(x);
        for (y = x << 1; y <= maxNum; y += x) {
          sift[y] = true;
        }
      }
    }

    return primeArray;
  }
  if(arguments.length > 1){
    return "Arguments more than one";}
  else if((typeof N == "number") && (N % 1 === 0) && (N > 0)){
    // Sum of primes
    var primeNum = getPrimes(N);
    for (var p = 0; p < primeNum.length; p++) {
    result += primeNum[p];}
  }
  else{
  if(typeof N != "number" || N %1 !== 0){
    return "Number is not an integer";}
  if(N < 0){
    return "Invalid argument";}
  }

 return result;
}}