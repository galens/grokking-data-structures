class Solution {
  static removeStars(s) {
    const tempStack = [];
    for (let i = 0; i < s.length; i++) {
      if (tempStack.length && s[i] === '*') {
        tempStack.pop();
      } else if (s[i] !== '*') {
        tempStack.push(s[i]);
      }
    }

    return tempStack.join('');
  }
}

console.log(Solution.removeStars('*a*b*c*d*'));

// time complexity: O(N)
// space complexity: O(N)
