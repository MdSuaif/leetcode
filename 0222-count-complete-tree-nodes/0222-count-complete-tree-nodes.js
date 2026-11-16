/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {

    if(root === null) return 0;

    let leftHeight = 0;
    let rightHeight = 0;

    let left = root;
    let right = root;

    while(left !== null){
        leftHeight++;
        left = left.left;
    }

    while(right !== null){
        rightHeight++;
        right = right.right;
    }

    if(leftHeight === rightHeight){
        return 2 ** leftHeight - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};