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

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let lowestBuy = prices[0];
  let currentProfit = 0;
  for (let i = 0 ; i < prices.length; i++){
      lowestBuy = Math.min(lowestBuy, prices[i]);
      currentProfit = prices[i] - lowestBuy;
      max = Math.max(max,currentProfit);
  }
  return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++){
      if (prices[i + 1] > prices[i]){
          profit += prices[i+1] - prices[i];
      }
  }
  return profit;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 1 => 1, 2 => 2, 3 => 3, 4 => 5
  //
  if (n === 1){
      return 1;
  }
  if (n === 2){
      return 2;
  }
  let num1 = 1;
  let num2 = 2;
  for (let i = 3; i < n; i++){
      let temp = num1;
      num1 = num2;
      num2 = num2 + temp;
  }
  return num1 + num2;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let q = [root];
  let sum = 0;
  if (root === null) return sum;
  while (q.length !== 0){
      let node = q.shift();
      if (node.left !== null){
          q.push(node.left);
          if (node.left.left === null && node.left.right === null){
          sum += node.left.val;
          }
      }
      if (node.right !== null){
          q.push(node.right);
      }
  }
  return sum;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jSet = new Set(J.split(""));
  let count = 0;
  for (let letter of S){
      if (jSet.has(letter)) count++;
  }
  return count;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  
  
  while (start <= end){
      let mid = Math.floor((start + end)/2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target){
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return start;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let z = 1;
  while (z <= x || z <= y){
      z *= 2;
  }
  let xStr = "";
  let yStr = "";
  while (z >= 1){
      if (x >= z){
          xStr = "1" + xStr;
          x -= z;
      } else {
          xStr = "0" + xStr;
      }
      if (y >= z){
          yStr = "1" + yStr;
          y -= z;
      } else {
          yStr = "0" + yStr;
      }
  z /= 2;
  }
  let count = 0;
  for (let i = 0; i < xStr.length; i++){
      if (xStr[i] !== yStr[i]) count++;
  }
  return count;
};


//Convert to binary. Then iterate and compare?
// How to convert to binary?
// Check length x and compare to 2^x.
// If greater, push 1. if not, push 0.
// Subtract by 2^x and keep going?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let currentMax = 0;
  for (let i = 0; i <= nums.length; i++){
      if (nums[i] === 1){
          currentMax++;
      } else {
          max = Math.max(max, currentMax);
          currentMax = 0;
      }
  }
  return max;
};

// Iterate!
// Keep track of current max
// When we hit a 1, increment local max.
// When we hit a zero, compare local and current max.
// REset local max

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(" ");
  let reversedWords = words.map(word => {
      let newWord = "";
      for (let i = 0; i < word.length; i++){
          newWord = word[i] + newWord;
      }
      return newWord;
  })
  let newSentence = reversedWords.join(" ");
  return newSentence.trim();
};

// Split by space
// Reverse each word
// Join them together again
// remove extra whitespace

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let output = [];
  let set1 = new Set();
  let set2 = new Set();
  nums1.forEach(function(num){
      set1.add(num);
  })
  
  nums2.forEach(function(num){
      set2.add(num);
  })
  set2.forEach(function(num){
      if (set1.has(num)) output.push(num);
  })
  return output;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let obj1 = freqCounter(nums1);
  let obj2 = freqCounter(nums2);
  let output = [];
  for (num in obj1){
      if (num in obj2){
          let count = Math.min(obj1[num],obj2[num]);
          for (let i = 0; i< count; i++){
              output.push(num);
          }
      }
  }
  return output;
};

function freqCounter(arr){
  let counter = [];
  arr.forEach(function(ele){
      let count = counter[ele] || 0;
      counter[ele] = count + 1;
  });
  return counter;
}

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let arr = s.split(" ");
  let output = arr.filter(word => word.trim().length !== 0);
  return output.length;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length < 2) return true;
  let isCapital1 = word[0] === word[0].toUpperCase();
  let isCapital2 = word[1] === word[1].toUpperCase();
  if (isCapital1 && isCapital2){
      for (let i = 2; i < word.length; i++){
          if (word[i] !== word[i].toUpperCase()) return false;
      }
  } else if (!isCapital1 && !isCapital2){
      for (let i = 2; i < word.length; i++){
          if (word[i] === word[i].toUpperCase()) return false;
      }
  } else if (isCapital1 && !isCapital2){
      for (let i = 2; i < word.length; i++){
          if (word[i] === word[i].toUpperCase()) return false;
      }
  } else {
      return false;
  }
  return true;
};

// How to check? See if capital but converting to lower case and coverting

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let output = [];
  for (let i = 1; i <= n; i++){
      if (i % 15 === 0){
          output.push("FizzBuzz");
      } else if ( i % 3 === 0){
          output.push("Fizz")
      } else if ( i % 5 === 0){
          output.push("Buzz");
      } else {
          output.push(i.toString());
      }
  }
  return output;
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
   for (let i = 2; i < n; i++){
       if (isPrime(i)) count++;
   }
   return count
};

var isPrime= function(num) {
   if (num <= 1) return false;
   
   for (let i = 2; i <= Math.sqrt(num); i++){
       if (num % i === 0) return false;
   }
   return true;
}

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return null;
  
  function helper(node){
      if (node === null) return;
      let temp = node.right;
      node.right = node.left;
      node.left = temp;
      helper(node.left);
      helper(node.right);
      return node;
  }
  
  return helper(root)
};