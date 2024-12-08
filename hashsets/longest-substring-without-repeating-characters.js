class Solution {
  lengthOfLongestSubstring(s) {
    let char_set = new Set();
    let maxLength = 0,
      start = 0,
      end = 0;

    // Traverse the string with the end pointer
    while (end < s.length) {
      // If the character is not in the set, it's a unique character for the current substring
      if (!char_set.has(s[end])) {
        char_set.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
      } else {
        // If we find a repeating character, remove the character at the start pointer and move the start pointer
        char_set.delete(s[start]);
        start++;
      }
    }

    return maxLength;
  }
}

const sol = new Solution();
console.log(sol.lengthOfLongestSubstring('abcdaef')); // Expected: 6
console.log(sol.lengthOfLongestSubstring('aaaaa')); // Expected: 1
console.log(sol.lengthOfLongestSubstring('abrkaabcdefghijjxxx')); // Expected: 10

// time complexity: O(n)
// space complexity: O(1)
