import { Tree } from './Tree'

const arr = [5, 3, 7, 2, 4, 6, 8]
const tree = new Tree(arr)
tree.prettyPrint()
console.log(tree.inOrder())
console.log(tree.preOrder())
console.log(tree.postOrder())
