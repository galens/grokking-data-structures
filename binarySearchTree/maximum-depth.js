class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  maxDepth(root) {
    // Base case: if node is null, return 0
    if (!root) return 0;

    // Recursively calculate left subtree depth
    let leftDepth = this.maxDepth(root.left);

    // Recursively calculate right subtree depth
    let rightDepth = this.maxDepth(root.right);

    // Return the maximum of left and right subtree depth plus 1 for the current node
    return 1 + Math.max(leftDepth, rightDepth);
  }
}

// Testing the function
const solver = new Solution();

// Example 1
let root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(solver.maxDepth(root1)); // Expected output: 3

// Example 2
let root2 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
console.log(solver.maxDepth(root2)); // Expected output: 3

// Example 3
let root3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(7, null, new TreeNode(9))),
  new TreeNode(3)
);
console.log(solver.maxDepth(root3)); // Expected output: 4

// time complexity: O(n)
// space complexity: O(n)
