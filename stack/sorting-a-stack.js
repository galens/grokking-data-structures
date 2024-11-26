class Solution {
  static sortStack(stack) {
    let tempStack = [];

    // continue the process until the original stack is empty
    while (stack.length) {
      const temp = stack.pop();
      while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
        const temp2 = tempStack.pop();
        stack.push(temp2);
      }
      tempStack.push(temp);
    }
    return tempStack;
  }
}

console.log(Solution.sortStack([34, 3, 31, 98, 92, 23]));

// time complexity: O(N2)
// space complexity: O(N)
