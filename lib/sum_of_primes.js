// Sums the Primes munbers less than or equal to the supplied integer
'use strict'

module.exports = {
  sumOfPrimes: function sumOfPrimes(n) {
  var result = 0;

  function getPrimes(maxNum) {
    var sift = [], primeArray = [];
    var x, y;
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
  else if((typeof n == "number") && (n % 1 === 0) && (n > 0)){
    // Sum of primes
    var primeNum = getPrimes(n);
    for (var p = 0; p < primeNum.length; p++) {
    result += primeNum[p];}
  }
  else{
  if(typeof n != "number" || n %1 !== 0){
    return "Number is not an integer";}
  if(n < 0){
    return "Invalid argument";}
  }

 return result;
}}