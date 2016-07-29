// sort input array
// go from greatest divisor to least divisor from greatest value and check if they are in the rest of the divisors
function greatestCommonDivisor(array) {
  var commonDivisor = 1;
  //to handle negative numbers
  var unmutatedArray = array.slice(0);
  for (var i = 0; i < array.length; i++) {
    unmutatedArray[i] = Math.abs(unmutatedArray[i]);
  }
  var storage = getAllDivisors(unmutatedArray);


  var lowestCommonDivisorArray = storage.shift();
  // [ 3, 1 ]
  // [6, 3, 2, 1], [9, 3, 1]
  for (var i = 0; i < lowestCommonDivisorArray.length; i++) {
    var stillADivisor = true;
    for (var j = 0; j < storage.length; j++) {
      if (storage[j].indexOf(lowestCommonDivisorArray[i]) !== -1 && stillADivisor
         && commonDivisor < lowestCommonDivisorArray[i] && storage.length - 1 === j) {
         commonDivisor = lowestCommonDivisorArray[i];
      } else if (storage[j].indexOf(lowestCommonDivisorArray[i]) === -1) {
        stillADivisor = false;
      }
    }
  }
  // console.log([1,2,3,4,5].indexOf(7));

  return commonDivisor;
}

function getDivisor(number) {
  var storage = [];
  for (var i = number; i > 0; i--) {
    if (number % i === 0 ) {
      storage.push(i);
    }
  }
  return storage;
}

function getAllDivisors(array) {
  var divisorArray = [];
  for (var i = 0; i < array.length; i++) {
    divisorArray[i] = getDivisor(array[i]);
  }
  return divisorArray;
}

console.log(greatestCommonDivisor([150, 30, 90]) === 30);
//Write a method that returns the greatest common divisor between an array of integers that are passed into the method


// [3, 6, 12, 24];
// 1

// 3 = 3, 1
// 6 = 6, 3, 2, 1
// 12 = 12, 6, 4, 3, 2, 1
// 24 = 24, 12, 8, 6, 4, 3, 2, 1


// 1 = 1
// 2 = 2, 1
// 3 = 3, 1
// 5 = 5, 1
// 8 = 8, 4, 2, 1
// 12 = 6, 4, 3, 2, 1



//expected output
//Examples:
// [3,6,9] -> 3
// [5,12,8] -> 1
// [30,150,90] -> 30
// [30, 35, 90, 150] -> 30
// [1, 2, 3, 5, 8, 12] -> 3


// [30, 90, 150] ->
// divisorArray =
//   [
//    [30, 15, 10, 5, 3, 2, 1 ],
//    [30, 15, 10, 6, 5, 3, 2, 1 ],
//    [30, 25, 15, 10, 6, 5, 3, 2, 1 ]
//   ]
