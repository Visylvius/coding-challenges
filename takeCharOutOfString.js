function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverseSpecial(word){
  // we need a way to save the index of Q or q
  var originalWord = word;
  var qindexes = [];
  for (var index = 0; index < word.length; index++) {
    var character = word[index];
    // check to see if the character at i is equal to either q or Q
    // if it is equal to q or Q save the index
    if (character === 'q') {
      qindexes.push(['q', index]);
    } else if (character === 'Q') {
      qindexes.push(['Q', index]);
    }
  }


  // remove the Q and q from the word
  var wordWithoutQ = clear(word, 'q');
  // reverse the qQ-less word
  var reversedWord = reverseString(wordWithoutQ);

  //compare two indexes of q and Q array
    //if one index is less than the other
      //call insertAt with proper parameters
      //else call insertAT with other parameters

  // console.log('final word', finalWord);
  // then we add q's and Q's at the indexes of the proper arrays
  var completeWord = insertAtX(reversedWord, qindexes);
  return completeWord;
}

function insertAt(word, array) {
  var wordArray = word.split('');
  var before = wordArray.slice(0, array[1]).join('');
  var after = wordArray.slice(array[1]).join('');
  return before + array[0] + after;
}

function insertAtX(word, indexes) {
  for (var i = 0; i < indexes.length; i++) {
    word = insertAt(word, indexes[i]);
  }
  return word;
}

// function newClear(word, character) {
//   return word
//     .split('')
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] === character || word[i] === character.toUpperCase()) {
//       word[i] = '';
//     }
//   }
// }

// console.log(newClear('QQabcqq QQabcqq', 'q'));

function clear(word, character) {
  return word
    .split('')
    .filter(function(letter, index) {
      if (letter === character) {
        return false;
      } else if (letter === character.toUpperCase()) {
        return false;
      } else {
        return true;
      }
    })
    .join('');
}

function getFinalWord(word) {
  var seperatedWord = word.split(' ');
  for (var i = 0; i < seperatedWord.length; i++) {
    seperatedWord[i] = reverseSpecial(seperatedWord[i]);
  }
  return seperatedWord.join(' ');
}
/* AMAZING VANILLA JAVASCRIPT TEST FRAMEWORK */

// console.log(reverseString('hello') == 'olleh');
//console.log(clear('abqcdQ', 'q') === 'abcd')
// console.log(insertAt('laf', 1, 'o') === 'loaf');
console.log(getFinalWord('h2lQkq wroqq') === 'kl2Qhq orwqq');

['h2lQkq', 'wroqq'];

//output
//h2lQkq wroqq => kl2Qhq orwqq




//Write a method or collection of methods that will reverse the letters of each word in a string while leaving all instances of ‘Q’ or ‘q’ in place (stay at the current index). Each word is defined as a series of characters separated by a single whitespace(‘ ‘). Example: h2lQkq wroqq => kl2Qhq orwqq *
//Example output: h2lQkq wroqq => kl2Qhq orwqq
