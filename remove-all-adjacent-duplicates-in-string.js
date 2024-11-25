class Solution {
  static removeDuplicates(s) {
    let tempStack = [];
    for (let i = 0; i < s.length; i++) {
      if (tempStack.length && tempStack[tempStack.length - 1] === s[i]) {
        tempStack.pop();
      } else {
        tempStack.push(s[i]);
      }
    }
    return tempStack.join('');
  }
}

console.log(Solution.removeDuplicates('abbaca'));

// time complexity: O(N)
// space complexity: O(N)
