/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var treeHeight=height(root);
    
    return treeHeight!=null;
};

var height=function(root){
    if(root==null){
        return 0;
    }
    
    var leftHeight=height(root.left),
        rightHeight=height(root.right);
        
    if(leftHeight==null||rightHeight==null){
        return null;
    }
        
    if(Math.abs(leftHeight-rightHeight)>1){
        return null;
    }
        
    return 1+Math.max(leftHeight,rightHeight);
};
