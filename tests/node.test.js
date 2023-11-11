import { Node } from '../src/Node'

describe('Node class', () => {
  it('should create a node with the provided data, left, and right properties', () => {
    const data = 42
    const left = new Node(10)
    const right = new Node(20)
    const node = new Node(data, left, right)

    expect(node.data).toBe(data)
    expect(node.left).toBe(left)
    expect(node.right).toBe(right)
  })

  it('should create a node with null data, left, and right properties if not provided', () => {
    const node = new Node()

    expect(node.data).toBeNull()
    expect(node.left).toBeNull()
    expect(node.right).toBeNull()
  })
})
