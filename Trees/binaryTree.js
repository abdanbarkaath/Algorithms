//Tree has a root Parent Child leaf and siblings

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function travereseNode(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : travereseNode(node.left);
  tree.right = node.right === null ? null : travereseNode(node.right);
  return tree;
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
    } else {
      const searchTree = function (node) {
        if (data < node.value) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.value) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      searchTree(node);
      // console.log(this.root)
    }
  }
  isPresent(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === data) {
        return currentNode;
      }
      if (data < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }
  invert() {
    const invertTree = function (node) {
      if (node) {
        let right = node.right;
        let left = node.left;
        node.right = left;
        node.left = right;
        invertTree(node.right);
        invertTree(node.left);
        console.log(node);
      }
    };
    invertTree(this.root);
    return this.root;
  }
  remove(data) {
    //Incomplete
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (data < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      if (data > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      if (currentNode.value === data) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.right;
          } else if(currentNode)
        }
        return currentNode;
      }
    }
    return currentNode;
  }
}

let tree = new BinaryTree();
tree.insert(100);
tree.insert(50);
tree.insert(20);
tree.insert(150);
tree.insert(180);
tree.insert(120);
let present = tree.isPresent(50);
let remove = tree.remove(50);
// console.log(tree.root)
// let invert = tree.invert();
// console.log(x)
// console.log(JSON.stringify((bTree.root)));
// console.log(bTree.root);
