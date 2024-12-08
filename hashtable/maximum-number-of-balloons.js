class Solution {
  maxNumberOfBalloons(text) {
    let minCount = Number.POSITIVE_INFINITY;
    let freq = {};

    for (const char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }
    // Calculate the maximum number of times "balloon" can be formed
    minCount = Math.min(minCount, freq['b'] || 0);
    minCount = Math.min(minCount, freq['a'] || 0);
    minCount = Math.min(minCount, (freq['l'] || 0) / 2);
    minCount = Math.min(minCount, (freq['o'] || 0) / 2);
    minCount = Math.min(minCount, freq['n'] || 0);

    return Math.floor(minCount);
  }
}

const solution = new Solution();
console.log(solution.maxNumberOfBalloons('balloonballoon'));

// time complexity: O(n)
// space complexity: O(1)
