class Solution {
  static findMaxOnesRow(mat) {
    let maxOnesIdx = 0;
    let maxOnesCount = 0;
    for (let i = 0; i < mat.length; i++) {
      const oneSum = mat[i].reduce((a, b) => a + b, 0); // count ones in current row
      if (oneSum > maxOnesCount) {
        maxOnesCount = oneSum;
        maxOnesIdx = i;
      } else if (oneSum === maxOnesCount && i < maxOnesIdx) {
        // try to account for ties
        maxOnesCount = oneSum;
        maxOnesIdx = i;
      }
    }
    return [maxOnesIdx, maxOnesCount];
  }
}

console.log(
  Solution.findMaxOnesRow([
    [1, 0],
    [1, 1],
    [0, 1],
  ])
);

// time complexity O(M X N)
// space complexity O(1)
