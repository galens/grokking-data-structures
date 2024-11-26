// Define a DLNode class for representing elements in the Doubly Linked List.
class DLNode {
  constructor(val) {
    this.val = val;
    this.next = null; // Initialize the next pointer to null
    this.prev = null; // Initialize the previous pointer to null
  }
}

// Define a DoublyLinkedList class to manage the doubly linked list.
class DoublyLinkedList {
  constructor() {
    this.head = null; // Initialize the head of the linked list to null
  }

  insert(val) {
    // Create a new node with the given value and insert it at the beginning of the list.
    let newNode = new DLNode(val);
    newNode.next = this.head;
    if (this.head !== null) this.head.prev = newNode;
    this.head = newNode;
  }

  insertAfter(prev_node, val) {
    if (prev_node === null) {
      console.log('The given previous node must be in LinkedList.'); // Check if the previous node exists
      return;
    }
    let newNode = new DLNode(val); // Create a new node with the given value
    newNode.next = prev_node.next;
    prev_node.next = newNode;
    newNode.prev = prev_node;
    if (newNode.next !== null) newNode.next.prev = newNode;
  }

  delete(key) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === key) {
        // If the node with the specified key is found, remove it from the list
        if (temp.prev !== null) temp.prev.next = temp.next;
        else this.head = temp.next;
        if (temp.next !== null) temp.next.prev = temp.prev;
        return;
      }
      temp = temp.next;
    }
  }

  search(key) {
    let current = this.head;
    while (current !== null) {
      if (current.val === key) return true; // Return true if the key is found in the list
      current = current.next;
    }
    return false; // Return false if the key is not found in the list
  }
}

let dll = new DoublyLinkedList();
dll.insert(1);
dll.insert(2);
dll.insert(3);

console.log('Search 2:', dll.search(2)); // true
dll.delete(2);
console.log('Search 2:', dll.search(2)); // false
