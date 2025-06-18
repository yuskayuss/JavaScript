function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; nums.lenth; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// console.log(twoSum([2, 7, 11, 15], 9));
