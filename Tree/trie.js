class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    // initialize at the root node
    let node = this.root;
    // iterate through every single letter of the word
    for (let i = 0; i < word.length; i++) {
      // char does not exist in children object
      if (!node.children[word[i]]) {
        // in children object each char is the key and all the values is a new TrieNode
        node.children[word[i]] = new TrieNode();
      }
      // traverse down characters in children
      node = node.children[word[i]];
    }
    // mark end of the word as true
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        return false;
      }
      node = node.children[word[i]];
    }
    return node.isEnd;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (!node.children[prefix[i]]) {
        return false;
      }
      node = node.children[prefix[i]];
    }
    return true;
  }
}
