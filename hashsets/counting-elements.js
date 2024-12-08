class Solution {
  countElements(arr) {
    // Convert the array to a set for O(1) lookups
    let numSet = new Set(arr);

    let count = 0;
    // For each number in the array, check if its next consecutive number exists in the set
    for (let num of arr) {
      if (numSet.has(num + 1)) {
        count++;
      }
    }

    return count;
  }
}

const solution = new Solution();
console.log(solution.countElements([4, 3, 1, 5, 6]));

// time complexity: O(n)
// space complexity: O(n)
