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

  test('does not insert a duplicate value', () => {
    const tree = new Tree([5, 3])
    tree.insert(5)
    expect(tree.root.left).toBeNull()
  })

  test('correctly inserts values into the tree', () => {
    const tree = new Tree([])
    tree.insert(5)
    tree.insert(3)
    tree.insert(7)
    tree.insert(2)
    tree.insert(4)
    tree.insert(6)
    tree.insert(8)
    // The tree structure should be correct after insertions
    expect(tree.root.data).toBe(5)
    expect(tree.root.left.data).toBe(3)
    expect(tree.root.right.data).toBe(7)
    expect(tree.root.left.left.data).toBe(2)
    expect(tree.root.left.right.data).toBe(4)
    expect(tree.root.right.left.data).toBe(6)
    expect(tree.root.right.right.data).toBe(8)
  })

  test('deletes the root node', () => {
    const tree = new Tree([5, 3, 7, 2, 4, 6, 8])
    tree.delete(5)
    expect(tree.root.data).toBe(6)
  })

  test('deletes a node with no children', () => {
    const tree = new Tree([5, 3])
    tree.delete(5)
    expect(tree.root.left).toBeNull()
    expect(tree.root.right).toBeNull()
  })

  test('deletes a node with one child', () => {
    const tree = new Tree([5, 3, 7, 2, 4, 6])
    tree.delete(7)
    expect(tree.root.right.data).toBe(6)
  })

  test('deletes a node with two children', () => {
    const tree = new Tree([5, 3, 7, 2, 4, 6, 8])
    tree.delete(7)
    expect(tree.root.right.data).toBe(8)
  })

  test('handles deleting a non-existing node', () => {
    const tree = new Tree([5, 3, 7])
    tree.delete(10)
    expect(tree.root.data).toBe(5)
    expect(tree.root.left.data).toBe(3)
    expect(tree.root.right.data).toBe(7)
  })
})
