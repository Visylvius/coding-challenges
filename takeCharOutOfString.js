function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverseSpecial(word){
  var qindexes = [];
  for (var index = 0; index < word.length; index++) {
    var character = word[index];
    if (character === 'q') {
      qindexes.push(['q', index]);
    } else if (character === 'Q') {
      qindexes.push(['Q', index]);
    }
  }
  var wordWithoutQ = clear(word, 'q');
  var reversedWord = reverse(wordWithoutQ);
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

function reverseString(word) {
  var seperatedWord = word.split(' ');
  for (var i = 0; i < seperatedWord.length; i++) {
    seperatedWord[i] = reverseSpecial(seperatedWord[i]);
  }
  return seperatedWord.join(' ');
}
