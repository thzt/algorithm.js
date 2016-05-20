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
var reverseList = function(head) {
    if(head==null){
        return head;
    }
    
    var stack=[];
    
    var cur=head;
    while(cur!=null){
        var nextNode=cur.next;
        cur.next=null;
        stack.push(cur);
        cur=nextNode;
    }
    
    var result=stack.pop();
    cur=result;
    while(stack.length!=0){
        var v=stack.pop();
        
        cur.next=v;
        cur=cur.next;
    }
    
    return result;
};
