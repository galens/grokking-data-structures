class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  depth(node) {
    // If node is null, return depth as 0
    if (!node) return 0;

    // Calculate depth of left child
    const leftDepth = this.depth(node.left);
    if (leftDepth === -1) return -1;

    // Calculate depth of right child
    const rightDepth = this.depth(node.right);
    if (rightDepth === -1) return -1;

    // Check if the current node is unbalanced
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    // Return depth of the current subtree
    return Math.max(leftDepth, rightDepth) + 1;
  }

  isBalanced(root) {
    return this.depth(root) !== -1;
  }
}

// Test example 1
const example1 = new TreeNode(3);
example1.left = new TreeNode(9);
example1.right = new TreeNode(20);
example1.right.left = new TreeNode(15);
example1.right.right = new TreeNode(7);

// Test example 2
const example2 = new TreeNode(1);
example2.left = new TreeNode(2);
example2.left.left = new TreeNode(3);
example2.left.left.left = new TreeNode(4);
example2.right = new TreeNode(5);

const solution = new Solution();

console.log(solution.isBalanced(example1)); // Expected output: true
console.log(solution.isBalanced(example2)); // Expected output: false

// time complexity: O(n)
// space complexity: O(h)
