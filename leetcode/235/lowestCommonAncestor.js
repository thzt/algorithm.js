/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var val=root.val;
    var min=Math.min(p.val,q.val);
    var max=Math.max(p.val,q.val);
    
    if(val>=min&&val<=max){
        return root;
    }
    
    if(val<min){
        return lowestCommonAncestor(root.right,p,q);
    }
    
    return lowestCommonAncestor(root.left,p,q);
};
