class Solution {
  uniqueOccurrences(arr) {
    // Count occurrences of each number
    const countMap = {};
    for (let num of arr) {
      countMap[num] = (countMap[num] || 0) + 1;
    }

    // Check if the occurrences are unique
    const uniqueCounts = new Set();
    for (let count in countMap) {
      if (uniqueCounts.has(countMap[count])) {
        return false;
      }
      uniqueCounts.add(countMap[count]);
    }
    return true;
  }
}

// Test the function
const sol = new Solution();
console.log(sol.uniqueOccurrences([4, 5, 4, 6, 6, 6]));
console.log(sol.uniqueOccurrences([7, 8, 8, 9, 9, 9, 10, 10]));
console.log(sol.uniqueOccurrences([11, 12, 13, 14, 14, 15, 15, 15]));

// time complexity: O(n)
// space complexity: O(n)
