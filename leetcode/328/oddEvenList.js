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
var oddEvenList = function(head) {
    if(head==null){
        return head;
    }
    
    var cur=head;
    var index=1;
    var evenHead=head.next;
    
    while(cur!=null){
        if(cur.next==null){
            if(index%2==0){
                break;
            }
            
            cur.next=evenHead;
            break;
        }
        if(cur.next.next==null&&index%2!=0){
            var next=cur.next;
            cur.next=evenHead;
            cur=next;
            index++;
            continue;
        }
        
        var next=cur.next;
        cur.next=next.next;
        
        cur=next;
        index++;
    }
    
    return head;
};
