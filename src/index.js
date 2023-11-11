import { Tree } from './Tree'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomNums = new Set()
for (let i = 0; [...randomNums].length < 10; i++) {
  randomNums.add(getRandomIntInclusive(0, 99))
}

const tree = new Tree([...randomNums])

console.log('A binary search tree created using 10 random integers <100:\n')
tree.prettyPrint()

console.log('\nIs Balanced? ' + tree.isBalanced())

console.log('Level order: ' + tree.levelOrder())
console.log('Pre order: ' + tree.preOrder())
console.log('Post order: ' + tree.postOrder())
console.log('In order: ' + tree.inOrder())

for (let i = 0; i < 15; i++) {
  tree.insert(getRandomIntInclusive(101, 200))
}

console.log(
  '\nInserting into the binary serach tree numbers > 100 to unbalance it:\n'
)
tree.prettyPrint()

console.log('\nIs Balanced? ' + tree.isBalanced())

tree.rebalance()

console.log('\nAfter balancing the tree:\n')
tree.prettyPrint()

console.log('\nIs Balanced? ' + tree.isBalanced())

console.log('\nLevel order: ' + tree.levelOrder())
console.log('\nPre order: ' + tree.preOrder())
console.log('\nPost order: ' + tree.postOrder())
console.log('\nIn order: ' + tree.inOrder())
