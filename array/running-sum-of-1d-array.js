class Solution {
  static runningSum(nums) {
    // Check if the array is null or has no elements and return an empty array if true
    if (!nums || nums.length === 0) {
      return [];
    }

    const result = [];
    result[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      result[i] = nums[i] + result[i - 1];
    }
    return result;
  }
}

console.log(Solution.runningSum([2, 3, 5, 1, 6]));

// time complexity O(N)
// space complexity O(N)
