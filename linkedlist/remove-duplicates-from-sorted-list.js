class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  deleteDuplicates(head) {
    let current = head;
    while (current && current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }

  printList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + ' ');
      current = current.next;
    }
    console.log();
  }
}

const solution = new Solution();

// Test Example 1
let head1 = new Node(1, new Node(1, new Node(2)));
let result1 = solution.deleteDuplicates(head1); // Expected: 1 -> 2
solution.printList(result1);

// Test Example 2
let head2 = new Node(1, new Node(2, new Node(2, new Node(3))));
let result2 = solution.deleteDuplicates(head2); // Expected: 1 -> 2 -> 3
solution.printList(result2);

// Test Example 3
let head3 = new Node(3, new Node(3, new Node(3)));
let result3 = solution.deleteDuplicates(head3); // Expected: 3
solution.printList(result3);
