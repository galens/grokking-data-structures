class TreeNode {
  constructor(x) {
    this.val = x; // Value of the node.
    this.left = null; // Reference to the left child.
    this.right = null; // Reference to the right child.
  }
}

class Solution {
  constructor() {
    // `count` keeps track of the number of nodes we've traversed in-order.
    this.count = 0;

    // `result` will hold our final answer.
    this.result = 0;
  }

  // This method is the public API that finds the kth smallest element in a BST.
  kthSmallest(root, k) {
    // Start the in-order traversal.
    this.traverse(root, k);

    // Once traversal is done, the `result` will hold our answer.
    return this.result;
  }

  // A recursive function to do an in-order traversal of the BST.
  // We stop traversing once we've visited `k` nodes.
  traverse(node, k) {
    // If the current node is null or we've already traversed k nodes, return.
    if (!node || this.count >= k) {
      return;
    }

    // First, traverse the left subtree.
    this.traverse(node.left, k);

    // Increment the counter for the current node.
    this.count++;

    // If we've traversed exactly k nodes, this is our result.
    if (this.count === k) {
      this.result = node.val;
    }

    // Finally, traverse the right subtree.
    this.traverse(node.right, k);
  }
}

// Testing
const example1 = new TreeNode(8);
example1.left = new TreeNode(3);
example1.left.left = new TreeNode(1);
example1.left.right = new TreeNode(6);
example1.left.right.left = new TreeNode(4);
example1.left.right.right = new TreeNode(7);
example1.right = new TreeNode(10);
example1.right.right = new TreeNode(14);
example1.right.right.left = new TreeNode(13);

const solution = new Solution();
// Test the kthSmallest method.
console.log(solution.kthSmallest(example1, 4)); // Expected output: 6

// time complexity: O(k)
// space complexity: (O(h))
