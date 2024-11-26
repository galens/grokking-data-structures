class Solution {
  static containsDuplicate(nums) {
    if (!nums || !nums.length) {
      return false;
    }

    const hasSeen = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (hasSeen.has(nums[i])) {
        return true;
      } else {
        hasSeen.add(nums[i]);
      }
    }
    return false;
  }
}

console.log(Solution.containsDuplicate([1, 2, 3, 1]));

// time complexity O(N)
// space complexity O(N)
