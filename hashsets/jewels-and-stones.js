class Solution {
  numJewelsInStones(jewels, stones) {
    let count = 0;
    const jewelSet = new Set(jewels);

    for (const char of stones) {
      if (jewelSet.has(char)) {
        count++;
      }
    }
    return count;
  }
}

const solution = new Solution();
console.log(solution.numJewelsInStones('abc', 'aabbcc'));

// time complexity: O(n + m)
// space complexity: O(1)
