/**
  Given an array of strings: all words (lower case english letters only), at least one word
  Given a string of characters: w/ duplicates, at least one char

  'Good' word: can be formed by the string of characters
  Each char can only be used once.

  Return the sum of the lengths of all good strings

  Ex:
  ['cow', "beef", "moo"]
  'cow'
  Good: cow, moo 
  Expect: 6

  Arr Empty: 0 

  str counter:
  c = 1
  o = 1
  w = 1

sum = 3

  1) Put chars of our string in a freq counter
  2) Iterate through our array of words
  3) Have a freq counter for chars for this word
  4) See if all the chars in the word has a count that is less or equal that our str counter
  5) If so, we will add the length of the word to a sum
  6) After iteration, we will return this sum
 */


// Ex:
// ['cow', "beef", "moo"]
// 'cow'
// Good: cow, moo 
// Expect: 6

// Arr Empty: 0 

// str counter:
// c = 1
// o = 1
// w = 1

//wordCharCounter
// c = 1
// o = 1
// w = 1

// sum = 3


function goodWordLength(words, chars) {
  let charCounter = {}
  let sum = 0;

  // Freq counter
  for (let char of chars) {
    let count = charCounter[char] || 0;
    charCounter[char] = count + 1;
  }

  words.forEach(word => {
    let wordCharCounter = {};
    for (let char of word) {
      let count = wordCharCounter[char] || 0;
      wordCharCounter[char] = count + 1;
    }

    let isGood = true;
    for (let char in wordCharCounter) {
      if (!(char in charCounter)) {
        isGood = false;
      } else if (wordCharCounter[char] > charCounter[char]) {
        isGood = false;
      }

    }
    if (isGood) {
      sum += word.length;
    }
  })

  return sum;
}

