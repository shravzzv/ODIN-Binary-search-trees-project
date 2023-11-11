import { Tree } from '../src/Tree'

describe('Tree', () => {
  let tree

  beforeEach(() => {
    tree = new Tree([5, 3, 7, 2, 4, 6, 8])
  })

  describe('insert', () => {
    test('inserts a new node correctly', () => {
      tree.insert(1)
      expect(tree.find(1)).not.toBeNull()
    })

    test('does not insert duplicate nodes', () => {
      tree.insert(3)
      const inOrderResult = tree.inOrder()
      expect(inOrderResult).toEqual([2, 3, 4, 5, 6, 7, 8])
    })
  })

  describe('delete', () => {
    test('deletes a leaf node correctly', () => {
      tree.delete(2)
      const inOrderResult = tree.inOrder()
      expect(inOrderResult).toEqual([3, 4, 5, 6, 7, 8])
    })

    test('deletes a node with one child correctly', () => {
      tree.delete(7)
      const inOrderResult = tree.inOrder()
      expect(inOrderResult).toEqual([2, 3, 4, 5, 6, 8])
    })

    test('deletes a node with two children correctly', () => {
      tree.delete(7)
      const levelOrderResult = tree.levelOrder()
      expect(levelOrderResult).toEqual([5, 3, 8, 2, 4, 6])
    })
  })

  describe('find', () => {
    test('finds an existing node', () => {
      const node = tree.find(4)
      expect(node).not.toBeNull()
      expect(node.data).toBe(4)
    })

    test('returns -1 for non-existing node', () => {
      const node = tree.find(10)
      expect(node).toBe(-1)
    })
  })

  describe('levelOrder', () => {
    test('traverses the tree in level order', () => {
      const levelOrderResult = tree.levelOrder()
      expect(levelOrderResult).toEqual([5, 3, 7, 2, 4, 6, 8])
    })

    test('executes the callback function for each node', () => {
      const callbackFn = jest.fn()
      tree.levelOrder(callbackFn)
      expect(callbackFn).toHaveBeenCalledTimes(7)
      expect(callbackFn).toHaveBeenCalledWith(5)
      expect(callbackFn).toHaveBeenCalledWith(8)
    })
  })

  describe('inOrder', () => {
    test('traverses the tree in in-order', () => {
      const inOrderResult = tree.inOrder()
      expect(inOrderResult).toEqual([2, 3, 4, 5, 6, 7, 8])
    })

    test('executes the callback function for each node', () => {
      const callbackFn = jest.fn()
      tree.inOrder(callbackFn)
      expect(callbackFn).toHaveBeenCalledTimes(7)
      expect(callbackFn).toHaveBeenCalledWith(2)
      expect(callbackFn).toHaveBeenCalledWith(8)
    })
  })

  describe('preOrder', () => {
    test('traverses the tree in pre-order', () => {
      const preOrderResult = tree.preOrder()
      expect(preOrderResult).toEqual([5, 3, 2, 4, 7, 6, 8])
    })

    test('executes the callback function for each node', () => {
      const callbackFn = jest.fn()
      tree.preOrder(callbackFn)
      expect(callbackFn).toHaveBeenCalledTimes(7)
      expect(callbackFn).toHaveBeenCalledWith(5)
      expect(callbackFn).toHaveBeenCalledWith(8)
    })
  })

  describe('postOrder', () => {
    test('traverses the tree in post-order', () => {
      const postOrderResult = tree.postOrder()
      expect(postOrderResult).toEqual([2, 4, 3, 6, 8, 7, 5])
    })

    test('executes the callback function for each node', () => {
      const callbackFn = jest.fn()
      tree.postOrder(callbackFn)
      expect(callbackFn).toHaveBeenCalledTimes(7)
      expect(callbackFn).toHaveBeenCalledWith(2)
      expect(callbackFn).toHaveBeenCalledWith(8)
    })
  })

  describe('getHeightOf', () => {
    test('should return height of null as -1', () => {
      expect(tree.getHeightOf(null)).toBe(-1)
    })

    test('should return the height of a non-existent node as -1', () => {
      expect(tree.getHeightOf(991231231341)).toBe(-1)
    })

    test('should return the height of the root node', () => {
      expect(tree.getHeightOf(5)).toBe(2)
    })

    test('should return the height of a non-leaf node', () => {
      expect(tree.getHeightOf(3)).toBe(1)
    })

    test('should return the height of a leaf node as 0', () => {
      expect(tree.getHeightOf(2)).toBe(0)
    })
  })

  describe('getDepthOf', () => {
    test('should return the depth of null as -1', () => {
      expect(tree.getDepthOf(null)).toBe(-1)
    })

    test('should return the depth of a non-existent node to be -1', () => {
      expect(tree.getDepthOf(991231231341)).toBe(-1)
    })

    test('should return the depth of the root node to be zero', () => {
      expect(tree.getDepthOf(5)).toBe(0)
    })

    test('should return the depth of a non-leaf node', () => {
      expect(tree.getDepthOf(3)).toBe(1)
    })

    test('should return the depth of a leaf node', () => {
      expect(tree.getDepthOf(4)).toBe(2)
    })
  })

  describe('getMinHeight', () => {
    test('should return the min. height of an empty tree as -1 ', () => {
      tree.root = null
      expect(tree.getMinHeight()).toBe(-1)
    })

    test('should return the min. height of a tree with only root as 0', () => {
      tree.root = null
      tree.insert(3)
      expect(tree.getMinHeight()).toBe(0)
    })

    test('should return the min. height of a tree with many nodes', () => {
      expect(tree.getMinHeight()).toBe(2)
    })
  })

  describe('getMaxHeight', () => {
    test('should return the max. height of an empty tree as -1 ', () => {
      tree.root = null
      expect(tree.getMaxHeight()).toBe(-1)
    })

    test('should return the max. height of a tree with only root as 0', () => {
      tree.root = null
      tree.insert(3)
      expect(tree.getMaxHeight()).toBe(0)
    })

    test('should return the max. height of a tree with many nodes', () => {
      expect(tree.getMaxHeight()).toBe(2)
    })
  })

  describe('isBalanced', () => {
    test('should return true for an empty tree', () => {
      tree.root = null
      expect(tree.isBalanced()).toBe(true)
    })
    test('should return true for a tree with only root node', () => {
      tree.root = null
      tree.insert(90129213)
      expect(tree.isBalanced()).toBe(true)
    })
    test('should return true for a balanced tree when the diff. btw max. and min. heights is 0', () => {
      expect(tree.isBalanced()).toBe(true)
    })
    test('should return true for a balanced tree when the diff. btw max. and min. heights is 1', () => {
      tree.insert(99)
      expect(tree.isBalanced()).toBe(true)
    })
    test('should return false for an unbalanced tree', () => {
      tree.root = null
      tree.insert(99)
      tree.insert(991)
      tree.insert(9911)
      tree.insert(99111)
      tree.insert(0)
      expect(tree.isBalanced()).toBe(false)
    })
  })
})
