class Solution {
  largestUniqueNumber(A) {
    let freq = {};

    // Populate the hashmap with number frequencies
    for (let num of A) {
      freq[num] = (freq[num] || 0) + 1;
    }

    let maxUnique = -1;
    // Traverse the hashmap to find the largest unique number
    for (let key in freq) {
      if (freq[key] === 1) {
        maxUnique = Math.max(maxUnique, parseInt(key));
      }
    }

    return maxUnique;
  }
}

const solution = new Solution();
console.log(solution.largestUniqueNumber([5, 7, 3, 7, 5, 8]));

// time complexity: O(n)
// space complexity: O(n)
