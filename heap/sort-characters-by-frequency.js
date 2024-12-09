class Solution {
  frequencySort(s) {
    // Build the frequency map
    const freqMap = {};
    for (let char of s) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Create an array and sort it based on the frequency
    const sortedChars = Object.keys(freqMap).sort(
      (a, b) => freqMap[b] - freqMap[a]
    );

    // Construct the result string
    let result = '';
    for (let char of sortedChars) {
      result += char.repeat(freqMap[char]);
    }

    return result;
  }
}

// Test cases
const sol = new Solution();
console.log(sol.frequencySort('programming')); // Expected: gggrrmmiapo
console.log(sol.frequencySort('aab')); // Expected: aab or baa
console.log(sol.frequencySort('apple')); // Expected: pplea

// time complexity: O(n + mlogm)
// space complexity: O(n)
