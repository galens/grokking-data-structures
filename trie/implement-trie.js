class TrieNode {
  constructor() {
    this.children = {}; // Object to store child nodes.
    this.isEnd = false; // Flag for end of a word.
  }
}

class Solution {
  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie.
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  // Returns if the word is in the trie.
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd;
  }

  // Returns if there is any word in the trie that starts with the given prefix.
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}

// Test the algorithm using example inputs
const trie = new Solution();
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
