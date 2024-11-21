class Solution {
  static isValid(s) {
    let characterStack = [];
    characterStack.push(s[0]);
    for (let i = 1; i < s.length; i++) {
      if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
        characterStack.push(s[i]);
      } else {
        if (s[i] === '}' && characterStack[characterStack.length - 1] === '{') {
          characterStack.pop();
        } else if (
          s[i] === ')' &&
          characterStack[characterStack.length - 1] === '('
        ) {
          characterStack.pop();
        } else if (
          s[i] === ']' &&
          characterStack[characterStack.length - 1] === '['
        ) {
          characterStack.pop();
        } else {
          characterStack.push(s[i]);
        }
      }
    }
    if (!characterStack.length) {
      return true;
    }
    return false;
  }
}

console.log(Solution.isValid('{[()]]}'));

// time complexity O(N)
// space complexity O(N)
