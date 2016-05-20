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
var mergeTwoLists = function(l1, l2) {
    var r={};
    merge(l1,l2,r);
    
    return r.next;
};

var merge=function(n1,n2,r){
    if(n1==null){
        r.next=n2;
        return;
    }
    
    if(n2==null){
        r.next=n1;
        return;
    }    
    
    var v1=n1.val;
    var v2=n2.val;
    
    if(v1<=v2){
        r.next=n1;
        merge(n1.next,n2,r.next);
        return;
    }
    
    r.next=n2;
    merge(n1,n2.next,r.next);
};
