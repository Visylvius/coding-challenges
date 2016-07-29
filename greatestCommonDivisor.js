function greatestCommonDivisor(array) {
  var commonDivisor = 1;
  var unmutatedArray = array.slice(0);
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

  var storage = getAllDivisors(unmutatedArray);
  var divisorsForFirstNumber = storage.shift();

  for (var i = 0; i < divisorsForFirstNumber.length; i++) {
    var stillADivisor = true;
    for (var j = 0; j < storage.length; j++) {
      if (storage[j].indexOf(divisorsForFirstNumber[i]) !== -1 && stillADivisor
         && commonDivisor < divisorsForFirstNumber[i] && storage.length - 1 === j) {
         commonDivisor = divisorsForFirstNumber[i];
      } else if (storage[j].indexOf(divisorsForFirstNumber[i]) === -1) {
        stillADivisor = false;
      }
    }
  }
  return commonDivisor;
}
