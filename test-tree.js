class TreeNode {
  constructor(id, type) {
    this.id = id
    this.type = type
    this.children = []
  }
}

class Tree {
  constructor() {
    this.root = null
  }
  traverseBFS(id) {
    if (!this.root) {
      return false
    }
    const queue = new Queue()
    const treeValues = []
    queue.enqueue(this.root)
    while (queue.size !== 0) {
      const nodeChildren = queue.first.value.children
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach((child) => queue.enqueue(child))
      }
      if (queue.first.value.id === id) return queue.first.value
      treeValues.push(queue.first.value)
      queue.dequeue()
    }
    return false
  }
}

class QueueNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const newNode = new QueueNode(value)
    //if queue is empty
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
      // add current first pointer to new first(new node), and make new node new first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    //add 1 to size
    this.size++

    return this
  }

  dequeue() {
    //if queue is empty return false
    if (this.size === 0) return false
    //get dequeuedNode
    const dequeuedNode = this.first
    //get new first (could be NULL if stack is length 1)
    const newFirst = this.first.next
    //if newFirst is null, reassign last to newFirst(null)
    if (!newFirst) {
      this.last = newFirst
    }
    //assign new first
    this.first = newFirst
    //remove refernce to list
    dequeuedNode.next = null
    //remove 1 from size
    this.size--
    //return dequeuednode
    return dequeuedNode
  }
}

const testTree2 = new Tree()

testTree2.root = new TreeNode(10, 'section')
testTree2.root.children.push(new TreeNode(6, 'section'))
testTree2.root.children.push(new TreeNode(15, 'section'))
testTree2.root.children[0].children.push(new TreeNode(3, 'section'))
testTree2.root.children[0].children.push(new TreeNode(8, 'section'))
testTree2.root.children[0].children.push(new TreeNode(7, 'section'))
testTree2.root.children[1].children.push(new TreeNode(20, 'section'))

console.log(testTree2.traverseBFS(7))
