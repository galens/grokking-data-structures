// Define a class Node to represent a node in the linked list
class Node {
  constructor(val) {
    this.val = val; // Assign val to the node
    this.next = null; // Initialize the next pointer to null
  }
}

// Define a class LinkedList to represent the singly linked list
class LinkedList {
  constructor() {
    this.head = null; // Initialize the head of the list to null
  }

  // Function to insert a new node at the beginning of the list
  insert(val) {
    let newNode = new Node(val); // Create a new node with the given val
    newNode.next = this.head; // Point the new node's next to the current head
    this.head = newNode; // Update the head of the list to the new node
  }

  // Function to insert a new node after a given node (prev_node)
  insertAfter(prev_node, val) {
    if (prev_node === null) {
      console.log('The given previous node must be in LinkedList.');
      return;
    }
    let newNode = new Node(val); // Create a new node with the given val
    newNode.next = prev_node.next; // Update the new node's next to prev_node's next
    prev_node.next = newNode; // Update prev_node's next to the new node
  }

  // Function to delete the first occurrence of a key in the list
  delete(key) {
    let temp = this.head,
      prev = null;
    // If the head node holds the key to be deleted
    if (temp !== null && temp.val === key) {
      this.head = temp.next; // Change the head of the list
      return;
    }
    // Search for the key to be deleted
    while (temp !== null && temp.val !== key) {
      prev = temp; // Keep track of the previous node
      temp = temp.next; // Move to the next node
    }
    // If key was not present in the list
    if (temp === null) return;
    // Unlink the node from the list
    prev.next = temp.next;
  }

  // Function to search for a key in the list. Returns true if found, otherwise false
  search(key) {
    let current = this.head; // Initialize current to head
    while (current !== null) {
      if (current.val === key)
        // If the key is found, return true
        return true;
      current = current.next; // Move to the next node
    }
    return false; // Key not found, return false
  }
}

// Create an instance of LinkedList
let list = new LinkedList();

// Insert nodes into the list
list.insert(1);
list.insert(2);
list.insert(3);

// Search for a key in the list and log the result
console.log('Search 2:', list.search(2)); // true

// Delete a node with a specific key from the list
list.delete(2);

// Search again for the key in the list and log the result
console.log('Search 2:', list.search(2)); // false
