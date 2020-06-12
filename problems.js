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

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let top = stack[stack.length - 1];
    if (top === "(" && s[i] === ")") {
      stack.pop();
    }
    else if (top === "{" && s[i] === "}") {
      stack.pop();
    }
    else if (top === "[" && s[i] === "]") {
      stack.pop();
    }
    else {
      stack.push(s[i]);
    }
  };
  return stack.length === 0;
};

var removeDuplicates = function(nums) {
  let i = 0;
    while (i < nums.length){
        if (nums[i-1] === nums[i]){
          nums.splice(i,1);  
        } else {
            i++;
        }
    };
    return nums.length;
};

var removeElement = function(nums, val) {
  let i = 0;
   while (i < nums.length){
       if (nums[i] === val){
         nums.splice(i,1);  
       } else {
           i++;
       }
   };
   return nums.length; 
};

var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++){
      if (haystack.substring(i,i+needle.length) === needle){
          return i;
      };
  }
  return -1;
};