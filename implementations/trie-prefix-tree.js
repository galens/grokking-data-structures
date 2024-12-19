class TrieNode {
  constructor() {
    this.children = Array(26).fill(null); // Array to store children nodes for each character
    this.isEndOfWord = false; // Flag to indicate if this node is the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // Root of the Trie
  }

  // Function to insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (let c of word) {
      let index = c.charCodeAt(0) - 'a'.charCodeAt(0); // Convert character to index
      if (!node.children[index]) node.children[index] = new TrieNode(); // Create a new node if it doesn't exist
      node = node.children[index];
    }
    node.isEndOfWord = true; // Mark the end of the word
  }
  // space complexity: O(n)
  // space complexity: best case O(1) worst case O(n)

  // Function to search a word in the Trie
  search(word) {
    let node = this.root;
    for (let c of word) {
      let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) return false; // Word not found
      node = node.children[index];
    }
    return node.isEndOfWord; // Return true if word exists, false otherwise
  }
  // time complexity O(n)
  // space complexity O(1)

  // Recursive function to delete a key from the Trie
  _delete(current, word, index) {
    if (index === word.length) {
      if (current.isEndOfWord) {
        current.isEndOfWord = false;
        return !current.children.some((child) => child !== null);
      }
      return false;
    }

    let ch = word[index];
    let charCode = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    let node = current.children[charCode];
    if (!node) {
      return false; // Word not found
    }

    let shouldDeleteChild = this._delete(node, word, index + 1);
    if (shouldDeleteChild) {
      current.children[charCode] = null;
      return !current.children.some((child) => child !== null);
    }

    return false;
  }

  // Function to delete a word from the Trie
  deleteWord(word) {
    this._delete(this.root, word, 0);
  }
  // time complexity O(n)
  // space complexity O(N)
}
