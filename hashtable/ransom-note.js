class Solution {
  canConstruct(ransomNote, magazine) {
    // Create an object to store character frequencies from the magazine
    let charCount = {};

    // Populate the object with character frequencies from the magazine
    for (let char of magazine) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if the ransom note can be constructed
    for (let char of ransomNote) {
      if (!charCount[char] || charCount[char] === 0) {
        return false;
      }
      charCount[char]--;
    }

    return true;
  }
}

const solution = new Solution();
console.log(solution.canConstruct('hello', 'hellworld'));

// time complexity: O(n + m)
// space complexity: O(1)
