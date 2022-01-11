export class TreeNode {
  constructor(id, type, selected = false) {
    this.id = id
    this.type = type
    this.children = []
    this.styles = {}
    this.options = {}
    this.selected = selected
  }
}
