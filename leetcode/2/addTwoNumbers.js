/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result=new ListNode(0);
    var flag=0;
    
    if(l1==null&&l2==null){
        return result;
    }
    
    addCore(l1,l2,result,flag);
    return result;
};

var addCore=function(n1,n2,r,flag){
    if(n1==null&&n2==null){
        r.val=flag;
        return;
    }
    
    var x=n1==null?0:n1.val;
    var y=n2==null?0:n2.val;
    
    var cur=x+y+flag;
    
    r.val=cur%10;
    flag=Math.floor(cur/10);
    
    if((n1==null||n1.next==null)
    &&(n2==null||n2.next==null)
    &&flag==0){
        return;
    }
    
    r.next=new ListNode(0);
    addCore(n1==null?null:n1.next,n2==null?null:n2.next,r.next,flag);
};
