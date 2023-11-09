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
})
