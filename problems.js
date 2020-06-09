var twoSum = function(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length - 1; i++){
      for (let j = i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target){
              output = [i,j];
          }
      }
  }
  return output;
};

var formatString = function (myString, maxRepeat){
  let prevLetter;
  let letterCount = 0;
  let newWord = "";
    for (let letter of myString){
      if (letter !== prevLetter) letterCount = 0;
      letterCount++;
      if (letterCount <= maxRepeat){
        newWord += letter; 
      }
    prevLetter = letter;
  }
  return newWord;
};

var isPalindrome = function(x) {
  let numWord = x.toString();
  for (let i = 0; i < numWord.length/2; i++){
    if (numWord[i] !== numWord[numWord.length - i -1]){
        return false;
    };  
  };
  return true;
};