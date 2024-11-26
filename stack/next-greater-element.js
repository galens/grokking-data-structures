class Solution {
  static nextLargerElement(arr) {
    const stack = [];
    const res = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
      console.log('stack: ', stack);
      console.log('res: ', res);
      while (stack.length && stack[stack.length - 1] <= arr[i]) {
        // While the stack is not empty and the element at the top of the stack
        // is less than or equal to the current element, pop elements from the stack
        stack.pop();
      }

      if (stack.length) {
        // If the stack is not empty after popping, it means the current element
        // has found its next larger element
        res[i] = stack[stack.length - 1];
      }

      // Push the current element's index onto the stack
      stack.push(arr[i]);
    }
    console.log('res: ', res);
    return res;
  }
}

console.log(Solution.nextLargerElement([13, 7, 6, 12]));

// time complexity O(N)
// space complexity O(N)
