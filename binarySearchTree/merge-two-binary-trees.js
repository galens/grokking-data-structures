class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  mergeTrees(t1, t2) {
    // If one of the nodes is null, return the other node
    if (t1 === null) return t2;
    if (t2 === null) return t1;

    // Create a new node with the sum of values of t1 and t2
    let newNode = new TreeNode(t1.val + t2.val);

    // Recursive call for left and right children
    newNode.left = this.mergeTrees(t1.left, t2.left);
    newNode.right = this.mergeTrees(t1.right, t2.right);

    return newNode;
  }
}

function printInOrder(node) {
  // Utility function to print tree using inorder traversal
  if (node === null) return;
  printInOrder(node.left);
  console.log(node.val);
  printInOrder(node.right);
}

// Test the algorithm with the provided input
let solution = new Solution();

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.right = new TreeNode(5);

let mergedTree = solution.mergeTrees(tree1, tree2);

// Print the merged tree using inorder traversal
printInOrder(mergedTree);

// time complexity: O(min(n,m))
// space complexity: O(min(n,m))
