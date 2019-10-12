import BinaryTreeNode from './BinaryTreeNode';

class BinaryTree {
  /**
   * Initialize the Binary Tree
   * @param {*} value The value
   * @return {undefined}
   */
  constructor(value) {
    if (value) {
      this.root = new BinaryTreeNode(value);
    }
  }

  /**
   * Return the root node of the tree.
   * @return {BinaryTreeNode} The root node of the tree.
   */
  getRoot() {
    return this.root;
  }

  /**
   * Get the number of nodes in the tree.
   * @return {number} The number of nodes in the tree.
   */
  size() {
    if (!this.root) {
      return 0;
    }
    return this.root.size();
  }

  /**
   * Get the height of the tree.
   * @return {number} The height of the tree.
   */
  height() {
    if (!this.root) {
      return 0;
    }
    return this.root.height();
  }

  /**
   * Traverse the tree in an in-order fashion.
   * @return {*[]} An array of values.
   */
  inOrder() {
    const arr = [];
    function _inOrder(node) {
      if (!node) {
        return;
      }
      _inOrder(node.left);
      arr.push(node.value);
      _inOrder(node.right);
    }
    _inOrder(this.root);
    return arr;
  }

  /**
   * Traverse the tree in a pre-order fashion.
   * @return {*[]} An array of values.
   */
  preOrder() {
    const arr = [];
    function _preOrder(node) {
      if (!node) {
        return;
      }
      arr.push(node.value);
      _preOrder(node.left);
      _preOrder(node.right);
    }
    _preOrder(this.root);
    return arr;
  }

  /**
   * Traverse the tree in a post-order fashion.
   * @return {*[]} An array of values.
   */
  postOrder() {
    const arr = [];
    function _postOrder(node) {
      if (!node) {
        return;
      }
      _postOrder(node.left);
      _postOrder(node.right);
      arr.push(node.value);
    }
    _postOrder(this.root);
    return arr;
  }

  /**
   * Checks if the binary tree is balanced, i.e. depth of the two subtrees of
   * every node never differ by more than 1
   * @return {boolean}
   */
  isBalanced() {
    function _isBalanced(node) {
      if (!node) {
        return true;
      }
      const leftHeight = node.left ? node.left.height() : -1;
      const rightHeight = node.right ? node.right.height() : -1;
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }
      return _isBalanced(node.left) && _isBalanced(node.right);
    }
    return _isBalanced(this.root);
  }
}

export default BinaryTree;
