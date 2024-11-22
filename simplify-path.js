class Solution {
  simplifyPath(path) {
    // Create a stack to store the simplified path components
    const stack = [];

    // Split the input path string using one or more consecutive '/' characters as a delimiter
    path.split(/\/+/).forEach((p) => {
      console.log('p: ', p);
      if (p === '..') {
        // If the component is '..', pop the last component from the stack
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (p && p !== '.') {
        // If the component is not empty and not '.', push it onto the stack
        stack.push(p);
      }
      console.log('stack: ', stack);
    });

    // Reconstruct the simplified path by joining components from the stack
    return '/' + stack.join('/');
  }
}

let sol = new Solution();
// Test cases
console.log(sol.simplifyPath('/a//b////c/d//././/..')); // Expected output: "/a/b/c"
console.log(sol.simplifyPath('/../')); // Expected output: "/"
console.log(sol.simplifyPath('/home//foo/')); // Expected output: "/home/foo"

// time complexity O(N)
// space complexity O(N)
