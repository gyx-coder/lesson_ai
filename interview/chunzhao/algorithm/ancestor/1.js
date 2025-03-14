function lowestCommomAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root
  }
  // 树 想想递归
  const left = lowestCommomAncestor(root.left, p, q)
  const right = lowestCommomAncestor(root.right, p, q)
  // 左右都有值 说明当前节点就是最近公共祖先
  if (left && right) {
    return root
  }

  return left !== null ? left : right
}