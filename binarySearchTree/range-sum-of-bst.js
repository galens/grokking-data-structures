class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  rangeSumBST(root, L, R) {
    // Base case
    if (!root) {
      return 0;
    }

    // If the current node's value is out of the range on the higher side
    if (root.val > R) {
      return this.rangeSumBST(root.left, L, R);
    }

    // If the current node's value is out of the range on the lower side
    if (root.val < L) {
      return this.rangeSumBST(root.right, L, R);
    }

    // Current node's value is in the range, include it and check both children
    return (
      root.val +
      this.rangeSumBST(root.left, L, R) +
      this.rangeSumBST(root.right, L, R)
    );
  }
}

// Test using the examples provided
const example1 = new TreeNode(10);
example1.left = new TreeNode(5);
example1.left.left = new TreeNode(3);
example1.left.right = new TreeNode(7);
example1.right = new TreeNode(15);
example1.right.right = new TreeNode(18);

const solution = new Solution();
console.log(solution.rangeSumBST(example1, 7, 15)); // Expected output: 32

// time complexity: O(N)
// space complexity: O(H)
