import { Tree } from './Tree'

/*
// Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.

// Confirm that the tree is balanced by calling isBalanced.

// Print out all elements in level, pre, post, and in order.

// Unbalance the tree by adding several numbers > 100.

// Confirm that the tree is unbalanced by calling isBalanced.

// Balance the tree by calling rebalance.

// Confirm that the tree is balanced by calling isBalanced.

// Print out all elements in level, pre, post, and in order.
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomNums = new Set()
for (let i = 0; [...randomNums].length < 99; i++) {
  randomNums.add(getRandomIntInclusive(0, 999))
}

console.log([...randomNums])

const tree = new Tree([...randomNums])

console.log(tree.isBalanced())
console.log(tree.levelOrder())
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())

for (let i = 0; i < 100; i++) {
  tree.insert(getRandomIntInclusive(1000, 1500))
}
console.log(tree.isBalanced())
tree.rebalance()
console.log(tree.isBalanced())
console.log(tree.levelOrder())
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())

tree.prettyPrint()
