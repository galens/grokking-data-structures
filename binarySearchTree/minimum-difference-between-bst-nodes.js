class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  constructor() {
    // Array to hold the values in sorted order.
    this.nodes = [];
  }

  minDiffInBST(root) {
    this.nodes = []; // Ensure nodes is empty.

    // First, perform the in-order traversal.
    this.inorderTraversal(root);

    // Initialize the minimum difference to the largest possible value.
    let minDiff = Number.MAX_SAFE_INTEGER;

    // Loop through the list and find the difference between each consecutive pair.
    for (let i = 1; i < this.nodes.length; i++) {
      minDiff = Math.min(minDiff, this.nodes[i] - this.nodes[i - 1]);
    }

    return minDiff;
  }

  // Helper method to perform the in-order traversal.
  inorderTraversal(node) {
    if (node === null) return;
    this.inorderTraversal(node.left); // Recursively visit the left subtree.
    this.nodes.push(node.val); // Add the current node's value.
    this.inorderTraversal(node.right); // Recursively visit the right subtree.
  }
}

// Test cases
let example1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
);
let example2 = new TreeNode(
  40,
  null,
  new TreeNode(70, new TreeNode(50), new TreeNode(90))
);
let solution = new Solution();

console.log(solution.minDiffInBST(example1)); // Expected output: 1
console.log(solution.minDiffInBST(example2)); // Expected output: 10 (because difference between 40 and 50 is 10)

// time complexity: O(n)
// space complexity: O(n) (a skewed tree) O(logn) (balanced tree)
