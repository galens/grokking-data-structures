class Solution {
  static findDifferenceArray(nums) {
    const n = nums.length;
    const differenceArray = new Array(n);
    let leftSum = 0;
    let rightSum = nums.reduce((acc, num) => acc + num, 0);

    // Calculate the difference between left and right sums for each position
    for (let i = 0; i < n; i++) {
      rightSum -= nums[i];
      differenceArray[i] = Math.abs(rightSum - leftSum);
      leftSum += nums[i];
    }

    return differenceArray;
  }
}

console.log(Solution.findDifferenceArray([2, 5, 1, 6, 1]));
