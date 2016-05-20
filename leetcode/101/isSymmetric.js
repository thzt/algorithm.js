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
var isSymmetric = function(root) {
    if(root==null){
        return true;
    }
    
    var q=[root];
    while(q.length!=0){
        var length=q.length;
        var i;
        var t=[];
        
        for(i=0;i<Math.floor(length/2);i++){
            var head=q[i];
            var tail=q[length-1-i];
            
            if(head==null&&tail==null){
                continue;
            }
            
            if(head==null||tail==null){
                return false;
            }
            
            if(head.val!=tail.val){
                return false;
            }
            
            t.push(head.left);
            t.push(head.right);
            
            t.unshift(tail.right);
            t.unshift(tail.left);
        }
        
        if(length%2!=0){
            t.push(q[i].left);
            t.push(q[i].right);
        }
        
        q=t;
    }
    
    return true;
};
