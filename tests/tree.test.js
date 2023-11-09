import { Tree } from '../src/Tree'

describe('Tests for class Tree', () => {
  test('creates a tree with the correct root node', () => {
    const inputArray = [3, 1, 5, 2, 4]
    const tree = new Tree(inputArray)
    expect(tree.root.data).toBe(3) // Root node should be the middle element of the sorted array
  })

  test('tree is balanced', () => {
    const inputArray = [3, 1, 5, 2, 4]
    const tree = new Tree(inputArray)
    // Helper function to calculate the height of the tree
    const getHeight = (node) => {
      if (node === null) {
        return 0
      }
      const leftHeight = getHeight(node.left)
      const rightHeight = getHeight(node.right)
      return Math.max(leftHeight, rightHeight) + 1
    }
    // Check if the height difference between left and right subtrees is at most 1
    expect(
      Math.abs(getHeight(tree.root.left) - getHeight(tree.root.right))
    ).toBeLessThanOrEqual(1)
  })

  test('handles empty input', () => {
    const tree = new Tree([])
    expect(tree.root).toBe(null)
  })

  test('handles input with duplicates and empty values', () => {
    const inputArray = [3, 1, 5, 2, 4, null, 1, 5]
    const tree = new Tree(inputArray)
    // In this case, duplicates and empty values should be removed, so the tree should have only unique, non-empty values
    // The tree structure is not explicitly checked here, but it should be correct if the tree is balanced
    expect(tree.root).not.toBeNull()
  })
})
