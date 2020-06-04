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