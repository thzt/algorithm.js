/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return same(p,q);
};

var same=function(p,q){
    if(p==null&&q==null){
        return true;
    }
    if(p==null||q==null){
        return false;
    }
    
    var isLeftSame=same(p.left,q.left);
    var isRightSame=same(p.right,q.right);
    var isValueSame=p.val===q.val;
    
    return isLeftSame&&isRightSame&&isValueSame;
};
