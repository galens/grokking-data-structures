class TreeNode {
  constructor(val) {
    this.val = val; // Value stored in the node.
    this.left = null; // Reference to the left child.
    this.right = null; // Reference to the right child.
  }
}

class Solution {
  closestValue(root, target) {
    // Initialize the closest value to the root's value.
    // This acts as a running minimum difference tracker.
    let closest_val = root.val;

    // Traverse the tree starting from the root.
    while (root) {
      // Check if the current node's value is closer to the target than the previous closest value.
      // If so, update closest_val.
      if (Math.abs(target - root.val) < Math.abs(target - closest_val)) {
        closest_val = root.val;
      }

      // Decide the direction to traverse.
      // If the target is less than the current node's value, we move left; otherwise, move right.
      // This decision is made based on the properties of a BST.
      if (target < root.val) {
        root = root.left;
      } else {
        root = root.right;
      }
    }

    // Once we've traversed all possible paths, return the closest value.
    return closest_val;
  }
}

// Test the solution
const example1 = new TreeNode(5);
example1.left = new TreeNode(3);
example1.left.left = new TreeNode(1);
example1.left.right = new TreeNode(4);
example1.right = new TreeNode(8);
example1.right.left = new TreeNode(6);
example1.right.right = new TreeNode(9);

const solution = new Solution();

// Test the closestValue function with the target value 6.4.
console.log(solution.closestValue(example1, 6.4)); // Expected output: 6

// time complexity: O(logn)
// space complexity: O(1)
