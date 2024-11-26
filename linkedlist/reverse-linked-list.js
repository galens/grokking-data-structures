class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
      let next = current.next; // store next node
      current.next = prev; // reverse the link
      prev = current; // move one step forward in the list
      current = next; // move one step forward in the list
    }
    return prev; // prev is now pointing to the new head
  }

  static printList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + ' ');
      current = current.next;
    }
    console.log();
  }
}

const solution = new Solution();

// Test case 1
let head1 = new Node(3, new Node(5, new Node(2)));
Solution.printList(solution.reverseList(head1)); // Expected Output: 2 5 3

// Test case 2
let head2 = new Node(7);
Solution.printList(solution.reverseList(head2)); // Expected Output: 7

// Test case 3
let head3 = new Node(-1, new Node(0, new Node(1)));
Solution.printList(solution.reverseList(head3)); // Expected Output: 1 0 -1

// time complexity O(n)

// space complexity O(1)
