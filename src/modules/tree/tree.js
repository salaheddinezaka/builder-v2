import { Queue } from './queue'
import { TreeNode } from './tree-node'

export class Tree {
  constructor() {
    this.root = new TreeNode(0, 'section')
  }
  traverseBFS() {
    if (!this.root) {
      return null
    }
    const queue = new Queue()
    queue.enqueue(this.root)
    const treeValues = []
    while (queue.size !== 0) {
      const nodeChildren = queue.first.value.children
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach((child) => queue.enqueue(child))
      }
      treeValues.push(queue.first.value)
      queue.dequeue()
    }
    return null
  }
  findWithBFS(id) {
    if (!this.root) {
      return null
    }
    const queue = new Queue()
    queue.enqueue(this.root)
    while (queue.size !== 0) {
      const nodeChildren = queue.first.value.children
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach((child) => queue.enqueue(child))
      }
      if (queue.first.value.id === id) return queue.first.value
      queue.dequeue()
    }
    return null
  }
  addNode(containerId, element) {
    const parent = this.findWithBFS(containerId)
    parent.children.push(new TreeNode(element.id, element.type))
  }
  selectNode(nodeId) {
    if (!this.root) {
      return
    }
    this.root.selected = this.root.id === nodeId ? true : false
    const queue = new Queue()
    queue.enqueue(this.root)
    while (queue.size !== 0) {
      const nodeChildren = queue.first.value.children
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach((child) => queue.enqueue(child))
      }
      queue.first.value.selected =
        queue.first.value.id === nodeId ? true : false
      queue.dequeue()
    }
    return null
  }
}
