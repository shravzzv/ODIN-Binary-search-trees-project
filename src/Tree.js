import { Node } from './Node'

export class Tree {
  constructor(array) {
    function buildTree(array) {
      // remove empty values & duplicates and sort the array
      const uniqueArr = [...new Set(array.filter((num) => num))]
      const treatedArr = uniqueArr.sort((a, b) => a - b)

      function getBalBSTFromSorArr(array, start = 0, end = array.length - 1) {
        // base of recursion
        if (start > end) return null

        // find the middle element of the array and set it as the root
        let mid = Math.floor((start + end) / 2)
        let node = new Node(array[mid])

        // generate the left subtree recursively
        node.left = getBalBSTFromSorArr(array, start, mid - 1)

        // generate the right subtree recursively
        node.right = getBalBSTFromSorArr(array, mid + 1, end)

        // return the level-0 root node
        return node
      }

      return getBalBSTFromSorArr(treatedArr)
    }

    this.root = buildTree(array)
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    // visualize the binary tree. credit: The Odin Project
    if (node === null) {
      return
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      )
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
    }
  }

  insert(value) {
    function insertNode(node, data) {
      if (data === node.data) {
        return
        // don't add duplicates
      } else if (data < node.data) {
        node.left ? insertNode(node.left, data) : (node.left = new Node(data))
      } else {
        node.right
          ? insertNode(node.right, data)
          : (node.right = new Node(data))
      }
    }

    this.root === null
      ? (this.root = new Node(value))
      : insertNode(this.root, value)
  }

  delete(value) {
    function removeNode(node, data) {
      if (node === null) return null

      if (data === node.data) {
        if (node.left === null && node.right === null) return null
        if (node.left === null) return node.right
        if (node.right === null) return node.left

        // If node has two children, replace it with its successor. It's successor is the lowest leaf node in the right subtree.
        let successor = node.right
        while (successor.left) {
          successor = successor.left
        }
        node.data = successor.data
        node.right = removeNode(node.right, successor.data)

        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }

    this.root = removeNode(this.root, value)
  }

  find(value) {
    // returns the node with the given value
    let currentNode = this.root
    if (currentNode === null) return -1

    while (currentNode) {
      if (value === currentNode.data) {
        return currentNode
      } else if (value > currentNode.data) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }

    return -1
  }
}
