/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    invert(root);
    
    return root;
};

var invert=function(node){
    if(node==null){
        return;
    }
    
    invert(node.left);
    invert(node.right);
    
    var temp=node.left;
    node.left=node.right;
    node.right=temp;
};
