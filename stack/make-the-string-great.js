class Solution {
  static makeGood(s) {
    const tempStack = [];
    for (let i = 0; i < s.length; i++) {
      if (
        tempStack.length > 0 &&
        tempStack[tempStack.length - 1].toLowerCase() === s[i].toLowerCase() &&
        tempStack[tempStack.length - 1] !== s[i]
      ) {
        tempStack.pop();
      } else {
        tempStack.push(s[i]);
      }
    }
    return tempStack.join('');
  }
}

console.log(Solution.makeGood('AbCdEfghIj'));
