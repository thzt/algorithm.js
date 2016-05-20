/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head==null){
        return head;
    }
    
    var hash=[];
    hash[head.val]=true;
    
    var cur=head;
    while(cur!=null){
        var next=cur.next;
        if(next==null){
            break;
        }
        
        var nextVal=next.val;
        
        if(hash[nextVal]==null){
            hash[nextVal]=true;
            cur=cur.next;
            continue;
        }
        
        cur.next=cur.next.next;
    }
    
    return head;
};
