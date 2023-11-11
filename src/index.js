import { Tree } from './Tree'

const arr = [5, 3, 7, 2, 4, 6, 8]
const tree = new Tree(arr)
tree.insert(99)
tree.insert(999)
tree.insert(9999)
tree.insert(99999)
tree.rebalance()
tree.prettyPrint()
console.log(tree.isBalanced())
