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

function formatString(myString, maxRepeat){
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

var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
};

var uniquePaths = function(m, n) {
  let arr = [];
  for (let i = 0; i < m; i++){
      let row = []
      for (let j = 0; j < n; j++){
          row.push(0);
      }
      arr.push(row);
  }

  for (let i = 0; i < m; i++){
      arr[i][0] = 1;
  }
  for (let i = 0; i < n; i++){
      arr[0][i] = 1;
  }
  arr[0][0] = 1;
  for (let i = 1; i < m; i++){
      for (let j = 1; j < n; j++){
      let right = arr[i-1]
          arr[i][j] = arr[i][j-1] + arr[i-1][j];
          
      }
  }
  return arr[m - 1][n - 1];
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let nodeQueue = [root, root]
  
  while (nodeQueue.length !== 0){
      let left = nodeQueue.shift();
      let right = nodeQueue.shift();
      if (left === null && right === null) continue;
      if (left === null || right === null) return false;
      if (left.val !== right.val){
          return false;
      }
      nodeQueue.push(left.left);
      nodeQueue.push(right.right);
      nodeQueue.push(left.right);
      nodeQueue.push(right.left);
  }
  return true;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let output = [];
  for (let i = 0; i < numRows; i++){
      let row = [];
      for (let j = 0; j < i + 1; j++){
          if (i === 0){
              row.push(1);
          } else {
              row.push((output[i-1][j-1] || 0) + (output[i-1][j] || 0) )
          }
      }
      output.push(row)
  }
  return output
};

// Loop though n rows.
// have a nested loop.
// Push the array in.
// Each entry n should be calculated by previous rows, a[n[] + a[(n - 1)], with it 
// being 0 if it is undefined.