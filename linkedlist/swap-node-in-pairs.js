class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  swapPairs(head) {
    // Initialize a dummy node to maintain the new head of the list after swapping.
    let dummy = new Node(0);
    dummy.next = head;
    // Previous node to maintain the node previous to the current pair being swapped.
    let previous = dummy;

    // Continue swapping until no pairs are left.
    while (head && head.next) {
      // Initialize the first and second nodes of the pair to be swapped.
      let firstNode = head;
      let secondNode = head.next;

      // Adjust the pointers to perform the swap.
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      previous.next = secondNode;

      // Move to the next pair.
      head = firstNode.next;
      previous = firstNode;
    }
    // Return the new head of the list after swapping.
    return dummy.next;
  }
}

// Test the algorithm with an example.
let head = new Node(1, new Node(2, new Node(3, new Node(4))));
let solution = new Solution();
let newHead = solution.swapPairs(head);
// Print the list after swapping pairs.
while (newHead) {
  console.log(newHead.val);
  newHead = newHead.next;
}

// time complexity: O(n)
// space complexity: O(1)
