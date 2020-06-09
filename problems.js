var twoSum = function (nums, target) {
  let output = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output = [i, j];
      }
    }
  }
  return output;
};

var formatString = function (myString, maxRepeat) {
  let prevLetter;
  let letterCount = 0;
  let newWord = "";
  for (let letter of myString) {
    if (letter !== prevLetter) letterCount = 0;
    letterCount++;
    if (letterCount <= maxRepeat) {
      newWord += letter;
    }
    prevLetter = letter;
  }
  return newWord;
};

var isPalindrome = function (x) {
  let numWord = x.toString();
  for (let i = 0; i < numWord.length / 2; i++) {
    if (numWord[i] !== numWord[numWord.length - i - 1]) {
      return false;
    };
  };
  return true;
};

var reverse = function (x) {
  let sign = x > 0 ? 1 : -1;
  let numWord = x.toString();
  let output = "";
  for (let i = 0; i < numWord.length; i++) {
    output = numWord[i] + output;
  };
  let y = sign * parseInt(output)
  return (y < 2 ** 31 - 1 && y > (-2) ** 31) ? y : 0;
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (prefix === strs[i].substring(0, prefix.length)) {

    }
    else {
      prefix = prefix.substring(0, prefix.length - 1);
      i--;
    };
  };
  return prefix;
};