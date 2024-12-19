class TrieNode {
  constructor() {
    this.children = {}; // Object to store children nodes
    this.isEnd = false; // Flag to indicate end of word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie
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
}

class Solution {
  indexPairs(text, words) {
    let trie = new Trie();
    // Populate trie with words
    words.forEach((word) => trie.insert(word));

    let result = [];
    // Iterate over each character in the text
    for (let i = 0; i < text.length; i++) {
      let node = trie.root;
      // Check for words starting at the current index
      for (let j = i; j < text.length; j++) {
        if (!node.children[text[j]]) break; // No match found
        node = node.children[text[j]];
        if (node.isEnd) {
          result.push([i, j]); // Add index pair if word found
        }
      }
    }
    return result;
  }
}

let sol = new Solution();
// Test cases
console.log(sol.indexPairs('bluebirdskyscraper', ['blue', 'bird', 'sky']));
console.log(sol.indexPairs('programmingisfun', ['pro', 'is', 'fun', 'gram']));
console.log(sol.indexPairs('interstellar', ['stellar', 'star', 'inter']));

// time complexity: O(N * L + T2)
// space complexity: O(N * L)
